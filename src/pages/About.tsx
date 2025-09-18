import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in treating every patient with empathy, respect, and understanding."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in mental health care and treatment outcomes."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work together with patients, families, and communities to promote wellness."
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "We maintain the highest ethical standards and professional competence."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Psychiatrist",
      specialty: "Stress Management & Anxiety Disorders",
      experience: "8+ years"
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Psychiatrist",
      specialty: "Depression & Cognitive Behavioral Therapy",
      experience: "12+ years"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child & Family Therapist",
      specialty: "Child Psychology & Family Therapy",
      experience: "6+ years"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              About AIMAN
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Dedicated to Your{" "}
              <span className="text-primary">Mental Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              AIMAN Mental Wellness Hospital has been providing compassionate, 
              evidence-based mental health care for over 15 years, helping thousands 
              of individuals and families on their journey to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality mental health services that empower 
                  individuals to achieve optimal psychological well-being. We are committed 
                  to delivering compassionate care through evidence-based treatments, 
                  fostering hope, and supporting recovery in a safe and nurturing environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading mental wellness center recognized for innovation, 
                  excellence, and compassionate care. We envision a community where 
                  mental health is valued equally with physical health, and where 
                  everyone has access to the support they need to thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What Guides Our Care
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape every interaction and guide our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                15 Years of Healing
              </h2>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009, AIMAN Mental Wellness Hospital began with a simple yet 
                profound mission: to provide comprehensive, compassionate mental health care 
                to our community. Our founders, a group of dedicated mental health professionals, 
                recognized the growing need for accessible, high-quality psychiatric services.
              </p>
              
              <p>
                Over the years, we have grown from a small clinic to a comprehensive 
                mental wellness center, serving over 5,000 patients annually. Our approach 
                combines traditional therapeutic methods with innovative treatment modalities, 
                ensuring that each patient receives personalized care tailored to their unique needs.
              </p>
              
              <p>
                Today, AIMAN stands as a beacon of hope in mental health care, with a team 
                of over 50 professionals including psychiatrists, psychologists, therapists, 
                and support staff. We continue to expand our services and embrace new 
                technologies, including telehealth options, to make mental health care 
                more accessible than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Leadership
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our experienced leaders are dedicated to providing exceptional mental health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Specialty:</strong> {member.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Impact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Making a Difference
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Healthcare Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}