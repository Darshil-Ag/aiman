import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

type Appt = { id: string; appointment_date: string; appointment_time: string; mode: "online" | "offline"; meet_link: string | null; patient_id: string };

export default function DoctorDashboard() {
  const [doctorId, setDoctorId] = useState<string | null>(null);
  const [doctorStatus, setDoctorStatus] = useState<"pending" | "approved" | "rejected" | null>(null);
  const [upcoming, setUpcoming] = useState<Appt[]>([]);
  const [patientNames, setPatientNames] = useState<Record<string, string>>({});
  const userId = typeof window !== "undefined" ? localStorage.getItem("session_user_id") : null;
  const role = typeof window !== "undefined" ? localStorage.getItem("session_role") : null;

  useEffect(() => {
    (async () => {
      if (!userId || role !== "doctor") return;
      const { data: doc } = await supabase.from("doctors").select("id,status").eq("user_id", userId).single();
      if (!doc) { setDoctorId(null); setDoctorStatus(null); return; }
      setDoctorId(doc.id);
      setDoctorStatus(doc.status as any);
      const { data: appts } = await supabase
        .from("appointments")
        .select("id,appointment_date,appointment_time,mode,meet_link,patient_id")
        .eq("doctor_id", doc.id)
        .order("appointment_date");
      setUpcoming(appts || []);

      // Batch fetch patient names
      const patientIds = Array.from(new Set((appts || []).map(a => a.patient_id)));
      if (patientIds.length) {
        const { data: patients } = await supabase.from("patients").select("id,user_id").in("id", patientIds);
        const userIds = Array.from(new Set((patients || []).map(p => p.user_id)));
        if (userIds.length) {
          const { data: users } = await supabase.from("users").select("id,name").in("id", userIds);
          const map: Record<string, string> = {};
          (patients || []).forEach(p => {
            const u = (users || []).find(x => x.id === p.user_id);
            if (u) map[p.id] = u.name;
          });
          setPatientNames(map);
        }
      }
    })();
  }, [userId, role]);

  const isLoggedInDoctor = role === "doctor" && !!userId;

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-4xl space-y-6">
        {!isLoggedInDoctor && (
          <Card>
            <CardHeader>
              <CardTitle>Welcome, Doctor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>Please sign up to create your profile and request approval from Admin.</div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link to="/doctor-signup">Sign up as Doctor</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {isLoggedInDoctor && doctorId == null && (
          <Card>
            <CardHeader>
              <CardTitle>Complete Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>No doctor profile found. Please complete signup.</div>
              <Button asChild>
                <Link to="/doctor-signup">Go to Doctor Signup</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {isLoggedInDoctor && doctorStatus === "pending" && (
          <Card>
            <CardHeader>
              <CardTitle>Awaiting Approval</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>Your profile is submitted and pending Admin approval. You will appear on Our Doctors once approved.</div>
            </CardContent>
          </Card>
        )}

        {isLoggedInDoctor && doctorStatus === "approved" && (
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                {upcoming.length === 0 && <div className="text-muted-foreground">No appointments yet.</div>}
                {upcoming.map((a) => (
                  <div key={a.id} className="flex items-center justify-between border rounded-md p-3">
                    <div>
                      <div className="font-medium">{a.appointment_date} {a.appointment_time} • {a.mode.toUpperCase()}</div>
                      <div className="text-muted-foreground">Patient: {patientNames[a.patient_id] || "-"}</div>
                      {a.mode === "offline" && <div className="text-muted-foreground">Address: Hospital, 123 Wellness Street</div>}
                    </div>
                    {a.mode === "online" && a.meet_link && (
                      <Button asChild>
                        <a href={a.meet_link} target="_blank">Join Google Meet</a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}


