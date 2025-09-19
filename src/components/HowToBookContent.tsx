import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { UserPlus, Calendar, Stethoscope, CheckCircle, ArrowRight } from "lucide-react";

export default function HowToBookContent() {
  const steps = [
    {
      number: 1,
      title: "Sign Up as Patient",
      description: "Create your patient account with basic information",
      icon: UserPlus,
      action: "Sign Up",
      link: "/patient-signup",
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Select Your Concern",
      description: "Choose the service that matches your mental health needs",
      icon: Stethoscope,
      action: "View Services",
      link: "/book",
      color: "bg-green-500"
    },
    {
      number: 3,
      title: "Book Appointment",
      description: "Choose doctor, date, time, and consultation mode (online/offline)",
      icon: Calendar,
      action: "Book Now",
      link: "/book",
      color: "bg-purple-500"
    },
    {
      number: 4,
      title: "Get Confirmation",
      description: "Receive appointment details and Google Meet link (if online)",
      icon: CheckCircle,
      action: "View Confirmation",
      link: "/confirm",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="container px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Patient Journey
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            How to Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground">
            Follow these simple steps to connect with our mental health professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.number} className="relative">
                <div className={`absolute -top-3 -left-3 w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {step.number}
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${step.color} rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <Button asChild className="w-full">
                    <Link to={step.link}>
                      {step.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-lg mb-6 opacity-90">
                Begin your mental health journey with our expert doctors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/patient-signup">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Sign Up as Patient
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/book">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


