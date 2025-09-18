import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export default function Login() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "patient" as "doctor" | "patient"
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Simple email-based login (in production, use proper auth)
      const { data: user, error } = await supabase
        .from("users")
        .select("id, name, email, role")
        .eq("email", form.email)
        .eq("role", form.role)
        .single();
      
      if (error || !user) {
        toast({ title: "Invalid credentials", variant: "destructive" });
        return;
      }

      // Store session
      localStorage.setItem("session_user_id", user.id);
      localStorage.setItem("session_role", user.role);
      localStorage.setItem("session_name", user.name);

      toast({ title: "Login successful" });
      
      // Redirect based on role
      if (form.role === "doctor") {
        window.location.href = "/doctor";
      } else {
        window.location.href = "/book";
      }
    } catch (err: any) {
      toast({ title: "Login failed", description: err?.message || String(err), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("session_user_id");
    localStorage.removeItem("session_role");
    localStorage.removeItem("session_name");
    toast({ title: "Logged out" });
  };

  const isLoggedIn = typeof window !== "undefined" ? localStorage.getItem("session_user_id") : null;
  const currentRole = typeof window !== "undefined" ? localStorage.getItem("session_role") : null;
  const currentName = typeof window !== "undefined" ? localStorage.getItem("session_name") : null;

  if (isLoggedIn) {
    return (
      <Layout>
        <div className="container px-4 py-10 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {currentName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Logged in as: {currentRole}
              </div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link to={currentRole === "doctor" ? "/doctor" : "/book"}>
                    Go to Dashboard
                  </Link>
                </Button>
                <Button variant="outline" onClick={logout}>
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="role">Login as</Label>
                <Select value={form.role} onValueChange={(v) => setForm((p) => ({ ...p, role: v as any }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={form.email} 
                  onChange={onChange} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  value={form.password} 
                  onChange={onChange} 
                  required 
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to={form.role === "doctor" ? "/doctor-signup" : "/patient-signup"} className="text-primary">
                Sign up as {form.role}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

