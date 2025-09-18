import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Calendar, Stethoscope, Users, Home, Info, Phone, Brain, UserCheck, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Brain },
  { name: "Experts", href: "/experts", icon: UserCheck },
  { name: "How to Book", href: "/patient-flow", icon: BookOpen },
  { name: "Book Appointment", href: "/book", icon: Calendar },
];

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const role = typeof window !== "undefined" ? localStorage.getItem("session_role") : null;

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <Heart className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">AIMAN</h1>
              <p className="text-xs text-muted-foreground">Mental Wellness Hospital</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              {!role && (
                <>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/doctor-signup">Doctor Signup</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/patient-signup">Patient Signup</Link>
                  </Button>
                </>
              )}
              {role === "doctor" && (
                <Button asChild size="sm">
                  <Link to="/doctor">Doctor Dashboard</Link>
                </Button>
              )}
              {role === "admin" && (
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin">Admin</Link>
                </Button>
              )}
              {role && (
                <Button asChild size="sm" variant="ghost">
                  <Link to="/login">Logout</Link>
                </Button>
              )}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center space-x-2 mb-8">
                <Heart className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-lg font-bold text-primary">AIMAN</h2>
                  <p className="text-xs text-muted-foreground">Mental Wellness Hospital</p>
                </div>
              </div>
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) 
                          ? "text-primary" 
                          : "text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 border-t space-y-2">
                  {!role && (
                    <>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link to="/doctor-signup" onClick={() => setIsOpen(false)}>
                          Doctor Signup
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/patient-signup" onClick={() => setIsOpen(false)}>
                          Patient Signup
                        </Link>
                      </Button>
                    </>
                  )}
                  {role === "doctor" && (
                    <Button asChild className="w-full">
                      <Link to="/doctor" onClick={() => setIsOpen(false)}>
                        Doctor Dashboard
                      </Link>
                    </Button>
                  )}
                  {role === "admin" && (
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/admin" onClick={() => setIsOpen(false)}>
                        Admin Dashboard
                      </Link>
                    </Button>
                  )}
                  {role && (
                    <Button asChild variant="ghost" className="w-full">
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Logout
                      </Link>
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-bold text-primary">AIMAN</h3>
                  <p className="text-xs text-muted-foreground">Mental Wellness Hospital</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Providing compassionate mental health care with expert doctors and modern facilities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/services" className="block hover:text-primary transition-colors">Adult Therapy</Link>
                <Link to="/services" className="block hover:text-primary transition-colors">Adult Psychiatry</Link>
                <Link to="/services" className="block hover:text-primary transition-colors">Mental Health Hospital</Link>
                <Link to="/conditions" className="block hover:text-primary transition-colors">Conditions We Support</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 123 Wellness Street, Health City</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@aiman.com</p>
                <p>🕒 Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AIMAN Mental Wellness Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}