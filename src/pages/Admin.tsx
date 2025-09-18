import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type DoctorRow = { id: string; user_id: string; specialty: string; qualifications: string; status: "pending" | "approved" | "rejected" };
type ApptRow = { id: string; appointment_date: string; appointment_time: string; mode: string; doctor_id: string; patient_id: string; meet_link: string | null };

export default function Admin() {
  const { toast } = useToast();
  const [pending, setPending] = useState<DoctorRow[]>([]);
  const [appointments, setAppointments] = useState<ApptRow[]>([]);
  const [users, setUsers] = useState<{ id: string; name: string; email: string }[]>([]);

  const load = async () => {
    const { data: d } = await supabase.from("doctors").select("id,user_id,specialty,qualifications,status").eq("status", "pending");
    setPending(d || []);
    const { data: a } = await supabase.from("appointments").select("id,appointment_date,appointment_time,mode,doctor_id,patient_id,meet_link").order("appointment_date");
    setAppointments(a || []);
    const userIds = Array.from(new Set((d || []).map(x => x.user_id)));
    if (userIds.length) {
      const { data: u } = await supabase.from("users").select("id,name,email").in("id", userIds);
      setUsers(u || []);
    } else {
      setUsers([]);
    }
  };

  useEffect(() => { load(); }, []);

  const setStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("doctors").update({ status }).eq("id", id);
    if (error) return toast({ title: "Failed", description: error.message, variant: "destructive" });
    toast({ title: `Doctor ${status}` });
    load();
  };

  const userLookup = useMemo(() => {
    const map: Record<string, { name: string; email: string }> = {};
    users.forEach(u => { map[u.id] = { name: u.name, email: u.email }; });
    return map;
  }, [users]);

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Pending Doctor Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pending.length === 0 && <div className="text-sm text-muted-foreground">No pending requests</div>}
              {pending.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between border rounded-md p-3">
                  <div className="text-sm">
                    <div className="font-medium">{doc.qualifications}</div>
                    <div className="text-muted-foreground">Specialty: {doc.specialty}</div>
                    <div className="text-xs mt-1">Doctor: {userLookup[doc.user_id]?.name || "-"} • {userLookup[doc.user_id]?.email || "-"}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setStatus(doc.id, "approved")}>Approve</Button>
                    <Button variant="destructive" onClick={() => setStatus(doc.id, "rejected")}>Reject</Button>
                    {userLookup[doc.user_id]?.email && (
                      <a className="text-sm underline" href={`mailto:${userLookup[doc.user_id].email}?subject=${encodeURIComponent("Doctor Application Update")}`}>Email</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>All Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {appointments.map((a) => (
                <div key={a.id} className="flex items-center justify-between border rounded-md p-3 text-sm">
                  <div>
                    <div>{a.appointment_date} {a.appointment_time} • {a.mode.toUpperCase()}</div>
                    {a.meet_link && <a className="text-primary" href={a.meet_link} target="_blank">Meet Link</a>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}


