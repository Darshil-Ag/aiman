import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Provider = {
  id: string;
  users?: { name: string };
  name?: string; // fallback if users relation missing
  specialty: string;
  qualifications: string;
  consultation_type: "online" | "offline" | "both";
  experience_years: number | null;
  location?: string | null; // optional; may be null if not in schema
};

export default function Providers() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState<string>("all");
  const [mode, setMode] = useState<string>("all");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("doctors")
        .select(`id, specialty, qualifications, consultation_type, experience_years, users(name)`) // location optional
        .eq("status", "approved")
        .order("specialty");
      if (!error) {
        const formatted = (data || []).map((d: any) => ({
          id: d.id,
          specialty: d.specialty,
          qualifications: d.qualifications,
          consultation_type: d.consultation_type,
          experience_years: d.experience_years,
          users: d.users,
        }));
        setProviders(formatted);
      }
    })();
  }, []);

  const specialties = useMemo(() => [
    "all",
    ...Array.from(new Set(providers.map(p => p.specialty))).filter(Boolean)
  ], [providers]);

  const filtered = providers.filter(p => {
    const name = (p.users?.name || p.name || "").toLowerCase();
    const matchSearch = !search || name.includes(search.toLowerCase()) || p.specialty.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specialty === "all" || p.specialty === specialty;
    const matchMode = mode === "all" || p.consultation_type === mode || (mode === "online" && p.consultation_type === "both") || (mode === "offline" && p.consultation_type === "both");
    return matchSearch && matchSpec && matchMode;
  });

  return (
    <div className="container px-4 py-10 max-w-6xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-2">Find an Expert</Badge>
          <h1 className="text-3xl font-bold">Providers & Experts Directory</h1>
          <p className="text-muted-foreground mt-2">Filter by specialty and consultation mode to find the right expert.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input placeholder="Search by name or specialty" value={search} onChange={(e) => setSearch(e.target.value)} />
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger>
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map(s => (
                <SelectItem key={s} value={s}>{s === "all" ? "All Specialties" : s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger>
              <SelectValue placeholder="Consultation Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <Card key={p.id} className="hover:shadow-md transition">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{p.users?.name || "Expert Doctor"}</CardTitle>
                  <Badge variant="secondary">{p.specialty}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="text-muted-foreground">{p.qualifications}</div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{p.consultation_type}</Badge>
                  {p.experience_years && <span className="text-muted-foreground">{p.experience_years} yrs</span>}
                </div>
                <div className="pt-2">
                  <Button asChild size="sm" className="w-full">
                    <a href="/book">
                      <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="text-sm text-muted-foreground">No experts found. Try different filters.</div>
          )}
        </div>
    </div>
  );
}


