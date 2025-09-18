import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // For now, just toast success. In future, send to Supabase or email service.
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We will contact you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 text-sm text-muted-foreground">
              Address: 123 Wellness Street, Health City • Phone: +1 (555) 123-4567 • Email: info@aiman.com
            </div>
            <form className="space-y-4" onSubmit={submit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
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
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={form.message} onChange={onChange} required />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}




