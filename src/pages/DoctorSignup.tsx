import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function DoctorSignup() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    qualifications: "",
    experience_years: "",
    bio: "",
    consultation_type: "both" as "online" | "offline" | "both",
    consultation_fee: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.specialty || !form.qualifications) {
      toast({ title: "Missing required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data: userInsert, error: userError } = await supabase
        .from("users")
        .insert({ name: form.name, email: form.email, phone: form.phone || null, role: "doctor" })
        .select()
        .single();
      if (userError || !userInsert) throw userError || new Error("User create failed");

      const { data: doctorInsert, error: doctorError } = await supabase
        .from("doctors")
        .insert({
          user_id: userInsert.id,
          specialty: form.specialty,
          qualifications: form.qualifications,
          experience_years: form.experience_years ? Number(form.experience_years) : null,
          bio: form.bio || null,
          consultation_type: form.consultation_type,
          consultation_fee: form.consultation_fee ? Number(form.consultation_fee) : null,
        })
        .select()
        .single();
      if (doctorError || !doctorInsert) throw doctorError || new Error("Doctor create failed");

      localStorage.setItem("session_user_id", userInsert.id);
      localStorage.setItem("session_role", "doctor");

      toast({ title: "Doctor registered successfully" });
    } catch (err: any) {
      toast({ title: "Signup failed", description: err?.message || String(err), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Signup</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={form.name} onChange={onChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={onChange} />
                </div>
                <div>
                  <Label htmlFor="specialty">Specialty</Label>
                  <Input id="specialty" name="specialty" value={form.specialty} onChange={onChange} required />
                </div>
                <div>
                  <Label htmlFor="qualifications">Qualifications</Label>
                  <Input id="qualifications" name="qualifications" value={form.qualifications} onChange={onChange} required />
                </div>
                <div>
                  <Label htmlFor="experience_years">Experience (years)</Label>
                  <Input id="experience_years" name="experience_years" type="number" min={0} value={form.experience_years} onChange={onChange} />
                </div>
                <div>
                  <Label>Consultation Type</Label>
                  <Select value={form.consultation_type} onValueChange={(v) => setForm((p) => ({ ...p, consultation_type: v as any }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="consultation_fee">Consultation Fee</Label>
                  <Input id="consultation_fee" name="consultation_fee" type="number" min={0} value={form.consultation_fee} onChange={onChange} />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" name="bio" value={form.bio} onChange={onChange} />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Register"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}



