import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

type Doc = { id: string; specialty: string; qualifications: string; consultation_type: "online" | "offline" | "both"; status: "pending" | "approved" | "rejected" };

export default function Doctors() {
  const [docs, setDocs] = useState<Doc[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("doctors").select("id,specialty,qualifications,consultation_type,status").order("created_at", { ascending: false });
      setDocs(data || []);
    })();
  }, []);

  const statusColor = (s: Doc["status"]) => s === "approved" ? "bg-green-100 text-green-700" : s === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700";

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Our Doctors</h1>
          <p className="text-muted-foreground">Browse specialists and book an appointment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docs.map((d) => (
            <Card key={d.id}>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="text-lg">{d.specialty}</CardTitle>
                <span className={`px-2 py-1 rounded text-xs ${statusColor(d.status)}`}>{d.status.toUpperCase()}</span>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">{d.qualifications}</div>
                <div className="text-xs">Consultation: <Badge variant="secondary">{d.consultation_type}</Badge></div>
              </CardContent>
            </Card>
          ))}
          {docs.length === 0 && <div className="text-sm text-muted-foreground">No doctors yet.</div>}
        </div>
      </div>
    </Layout>
  );
}



