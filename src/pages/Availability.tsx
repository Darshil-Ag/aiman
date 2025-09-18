import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Availability = {
  id?: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_available?: boolean;
};

const days = [
  { label: "Sunday", value: 0 },
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
];

export default function Availability() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Availability[]>([]);

  const userId = typeof window !== "undefined" ? localStorage.getItem("session_user_id") : null;

  useEffect(() => {
    (async () => {
      if (!userId) return;
      const { data: doctor, error: dErr } = await supabase.from("doctors").select("id").eq("user_id", userId).single();
      if (dErr || !doctor) return;
      const { data } = await supabase.from("doctor_availability").select("*").eq("doctor_id", doctor.id).order("day_of_week");
      setRows((data || []).map((r) => ({ ...r })));
    })();
  }, [userId]);

  const addRow = () => setRows((r) => [...r, { day_of_week: 1, start_time: "09:00", end_time: "17:00", is_available: true }]);
  const updateRow = (i: number, patch: Partial<Availability>) => setRows((all) => all.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const removeRow = (i: number) => setRows((all) => all.filter((_, idx) => idx !== i));

  const save = async () => {
    if (!userId) {
      toast({ title: "Login as doctor first", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data: doctor, error: dErr } = await supabase.from("doctors").select("id").eq("user_id", userId).single();
      if (dErr || !doctor) throw dErr || new Error("Doctor not found");

      // Simple strategy: delete and re-insert
      await supabase.from("doctor_availability").delete().eq("doctor_id", doctor.id);
      const toInsert = rows.map((r) => ({
        doctor_id: doctor.id,
        day_of_week: r.day_of_week,
        start_time: r.start_time,
        end_time: r.end_time,
        is_available: r.is_available ?? true,
      }));
      if (toInsert.length) {
        const { error: insErr } = await supabase.from("doctor_availability").insert(toInsert);
        if (insErr) throw insErr;
      }
      toast({ title: "Availability saved" });
    } catch (e: any) {
      toast({ title: "Failed to save", description: e?.message || String(e), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <Label>Day</Label>
                    <Select value={String(row.day_of_week)} onValueChange={(v) => updateRow(i, { day_of_week: Number(v) })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((d) => (
                          <SelectItem key={d.value} value={String(d.value)}>{d.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Start Time</Label>
                    <Input type="time" value={row.start_time} onChange={(e) => updateRow(i, { start_time: e.target.value })} />
                  </div>
                  <div>
                    <Label>End Time</Label>
                    <Input type="time" value={row.end_time} onChange={(e) => updateRow(i, { end_time: e.target.value })} />
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="destructive" onClick={() => removeRow(i)}>Remove</Button>
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <Button type="button" onClick={addRow}>Add Slot</Button>
                <Button type="button" onClick={save} disabled={loading}>{loading ? "Saving..." : "Save"}</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}



