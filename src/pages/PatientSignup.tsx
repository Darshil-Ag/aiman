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

export default function PatientSignup() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    emergency_contact: "",
    medical_history: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Missing required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data: userInsert, error: userError } = await supabase
        .from("users")
        .insert({ name: form.name, email: form.email, phone: form.phone || null, role: "patient" })
        .select()
        .single();
      if (userError || !userInsert) throw userError || new Error("User create failed");

      const { data: patientInsert, error: patientError } = await supabase
        .from("patients")
        .insert({
          user_id: userInsert.id,
          age: form.age ? Number(form.age) : null,
          gender: form.gender || null,
          emergency_contact: form.emergency_contact || null,
          medical_history: form.medical_history || null,
        })
        .select()
        .single();
      if (patientError || !patientInsert) throw patientError || new Error("Patient create failed");

      localStorage.setItem("session_user_id", userInsert.id);
      localStorage.setItem("session_role", "patient");

      toast({ title: "Patient registered successfully" });
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
            <CardTitle>Patient Signup</CardTitle>
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
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" type="number" min={0} value={form.age} onChange={onChange} />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select value={form.gender} onValueChange={(v) => setForm((p) => ({ ...p, gender: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="emergency_contact">Emergency Contact</Label>
                  <Input id="emergency_contact" name="emergency_contact" value={form.emergency_contact} onChange={onChange} />
                </div>
              </div>
              <div>
                <Label htmlFor="medical_history">Medical History</Label>
                <Textarea id="medical_history" name="medical_history" value={form.medical_history} onChange={onChange} />
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



