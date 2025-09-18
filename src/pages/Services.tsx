import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Building2, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Phone,
  Calendar,
  MessageCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Adult Therapy",
      description: "Professional counseling and therapy services for adults facing mental health challenges",
      color: "from-primary to-primary",
      bgColor: "bg-primary/10 dark:bg-primary/20",
      borderColor: "border-primary/20 dark:border-primary/30",
      textColor: "text-primary",
      features: [
        "Individual therapy sessions with licensed therapists",
        "Cognitive Behavioral Therapy (CBT) for anxiety and depression",
        "Dialectical Behavior Therapy (DBT) for emotional regulation",
        "Mindfulness-based stress reduction (MBSR)",
        "Trauma-informed care for PTSD and complex trauma",
        "Group therapy sessions for peer support",
        "Couples and family therapy sessions",
        "Art therapy and creative expression",
        "EMDR therapy for trauma processing",
        "Solution-focused brief therapy"
      ],
      includes: [
        "Personalized treatment plans",
        "Evidence-based therapeutic approaches",
        "Confidential and safe environment",
        "Regular progress assessments",
        "Crisis intervention support",
        "Family involvement when appropriate"
      ],
      whoItsFor: [
        "Adults experiencing anxiety or depression",
        "Individuals dealing with trauma or PTSD",
        "People struggling with relationship issues",
        "Those facing life transitions",
        "Individuals with stress-related concerns",
        "Anyone seeking personal growth and self-improvement"
      ],
      benefits: [
        "Improved emotional well-being",
        "Better coping strategies",
        "Enhanced self-awareness",
        "Stronger relationships",
        "Reduced anxiety and stress",
        "Increased life satisfaction"
      ]
    },
    {
      icon: Brain,
      title: "Adult Psychiatry",
      description: "Comprehensive psychiatric evaluation and medication management for mental health conditions",
      color: "from-accent to-accent",
      bgColor: "bg-accent/10 dark:bg-accent/20",
      borderColor: "border-accent/20 dark:border-accent/30",
      textColor: "text-accent",
      features: [
        "Psychiatric evaluations",
        "Medication management",
        "Diagnostic assessments",
        "Treatment planning",
        "Medication monitoring",
        "Collaborative care"
      ],
      includes: [
        "Comprehensive mental health assessment",
        "Personalized medication plans",
        "Regular follow-up appointments",
        "Side effect monitoring",
        "Coordination with therapists",
        "Crisis medication management"
      ],
      whoItsFor: [
        "Adults with diagnosed mental health conditions",
        "Individuals requiring medication evaluation",
        "People experiencing severe symptoms",
        "Those with treatment-resistant conditions",
        "Individuals needing psychiatric consultation",
        "People transitioning from other treatments"
      ],
      benefits: [
        "Effective symptom management",
        "Improved daily functioning",
        "Reduced hospitalizations",
        "Better quality of life",
        "Stable mood regulation",
        "Enhanced treatment outcomes"
      ]
    },
    {
      icon: Building2,
      title: "Mental Health Hospital",
      description: "Inpatient and intensive outpatient programs for comprehensive mental health treatment",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      textColor: "text-indigo-600 dark:text-indigo-400",
      features: [
        "Inpatient treatment programs",
        "Intensive outpatient programs",
        "24/7 medical supervision",
        "Group therapy sessions",
        "Recreational therapy",
        "Discharge planning"
      ],
      includes: [
        "Comprehensive assessment and diagnosis",
        "Individual and group therapy",
        "Medication management",
        "Family therapy sessions",
        "Life skills training",
        "Aftercare planning"
      ],
      whoItsFor: [
        "Individuals in mental health crisis",
        "People requiring intensive treatment",
        "Those with severe mental health conditions",
        "Individuals needing 24/7 support",
        "People transitioning from emergency care",
        "Those requiring structured treatment environment"
      ],
      benefits: [
        "Safe and supportive environment",
        "Intensive therapeutic support",
        "Medical monitoring and care",
        "Structured daily routine",
        "Peer support and community",
        "Comprehensive recovery planning"
      ]
    }
  ];

  const stats = [
    { number: "95%", label: "Patient Satisfaction Rate" },
    { number: "15+", label: "Years of Experience" },
    { number: "5000+", label: "Lives Transformed" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOGI1Y2Y5IiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-40 animate-pulse"></div>
        <div className="container px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 text-sm font-medium animate-bounce">
                Our Services
              </Badge>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-7xl">
                Comprehensive Mental Health Services
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                We provide a full spectrum of mental health services designed to support you at every stage of your journey to wellness.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Professional Stats Widget */}
      <section className="py-16 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/10 dark:to-purple-950/10">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-muted-foreground">
                Our proven track record speaks for itself
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Features Widget */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Licensed & Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our mental health professionals are fully licensed and certified with extensive training and experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-purple-900 dark:text-purple-100">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300">
                    Round-the-clock mental health support and crisis intervention services when you need them most.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <Star className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl text-indigo-900 dark:text-indigo-100">Evidence-Based Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-700 dark:text-indigo-300">
                    Our treatments are based on the latest scientific research and proven therapeutic methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className={`space-y-8 animate-fade-in-up animation-delay-${index * 200}`}>
                    {/* Service Header */}
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} ${service.borderColor} border-2 mb-6 transform hover:scale-110 transition-all duration-300`}>
                        <Icon className={`w-8 h-8 ${service.textColor}`} />
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-lavender-900 dark:text-lavender-100">
                        {service.title}
                      </h2>
                      <p className="text-xl text-lavender-700 dark:text-lavender-300 max-w-3xl mx-auto">
                        {service.description}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="flex items-center gap-2 text-lavender-600 dark:text-lavender-400 bg-lavender-100 dark:bg-lavender-900/50 px-4 py-2 rounded-full">
                          <span className="text-2xl">🌸</span>
                          <span className="font-medium">Peaceful & Professional Care</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* What It Includes */}
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-xl text-lavender-900 dark:text-lavender-100">
                            <CheckCircle className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />
                            What It Includes
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Who It's For */}
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Users className="w-5 h-5 text-primary" />
                            Who It's For
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.whoItsFor.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Key Features */}
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Star className="w-5 h-5 text-primary" />
                            Key Features
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.features.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Benefits */}
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Shield className="w-5 h-5 text-primary" />
                            Benefits
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.benefits.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* CTA Section */}
                    <div className={`${service.bgColor} p-8 rounded-lg ${service.borderColor} border`}>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                          Ready to Get Started with {service.title}?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                          Take the first step towards better mental health. Our compassionate team is here to support you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button size="lg" className="group">
                            Book a Consultation
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" size="lg" className="group">
                            <Phone className="mr-2 w-4 h-4" />
                            Call Us Now
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Separator */}
                    {index < services.length - 1 && (
                      <div className="border-t border-muted/50"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our experienced team can help you choose the best treatment approach for your unique needs. 
              We offer free initial consultations to ensure you get the right care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Appointment
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Available 24/7 for urgent mental health support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
