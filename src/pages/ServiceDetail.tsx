import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { getServiceBySlug, conditionMeta } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <Layout>
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const heroSubtitle = {
    "adult-therapy": "Compassionate care for adults dealing with mental health challenges.",
    "adult-psychiatry": "Expert diagnosis and medication management tailored to your needs.",
    "mental-health-hospital": "Comprehensive, round-the-clock care in a healing environment.",
    "children-first-services": "Specialized, family-centered support for children and teens.",
    "couples-therapy": "Strengthening relationships with evidence-based, empathetic care.",
    "self-care": "Guidance to build daily practices that support your wellbeing."
  } as Record<string, string>;

  const howWeHelpBullets: Record<string, string[]> = {
    "adult-therapy": [
      "Personalized psychotherapy plans guided by licensed clinicians",
      "Evidence-based approaches like CBT, DBT, and mindfulness",
      "Warm, confidential setting that respects your pace",
      "Clear goals, regular reviews, and supportive next steps",
      "Coordination with psychiatry when helpful"
    ],
    "adult-psychiatry": [
      "Thorough psychiatric evaluation and diagnosis",
      "Thoughtful medication planning and monitoring",
      "Close collaboration with therapists for integrated care",
      "Education on options, side effects, and lifestyle support",
      "Regular follow-ups to ensure safety and progress"
    ],
    "mental-health-hospital": [
      "24/7 multidisciplinary team in a safe, private environment",
      "Individual, group, and family-based therapeutic programs",
      "Structured daily routines that promote stability",
      "Medication management, nursing care, and discharge planning",
      "Smooth transitions to outpatient services"
    ],
    "children-first-services": [
      "Developmentally appropriate therapy for children and adolescents",
      "Family involvement and parent guidance",
      "Play-based and skills-focused interventions",
      "Collaboration with schools and pediatric providers",
      "Gentle, affirming environment for every child"
    ],
    "couples-therapy": [
      "Supportive space to improve communication and trust",
      "Skills for conflict resolution and emotional connection",
      "Therapeutic tools for rebuilding safety and respect",
      "Culturally sensitive and inclusive care",
      "Guidance for shared goals and healthy boundaries"
    ],
    "self-care": [
      "Practical routines for sleep, stress, and emotional regulation",
      "Psychoeducation and skills training",
      "Mindfulness and relaxation techniques",
      "Relapse prevention and resilience building",
      "Personalized wellness plans"
    ]
  };

  return (
    <Layout>
      <div className="container px-4 py-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="relative w-full aspect-[16/6] overflow-hidden rounded-lg bg-muted">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <service.icon className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">{service.name}</h1>
              {service.nowOpen && (
                <Badge variant="secondary">Now Open</Badge>
              )}
            </div>
            <p className="text-muted-foreground mt-2">{heroSubtitle[service.slug] || service.intro}</p>
          </div>

          {/* Introduction */}
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              {service.intro}
            </p>
            <p>
              We believe care works best when it’s personal, respectful, and paced to your comfort. Our team takes time to understand your story, your goals, and what support looks like for you.
            </p>
            <p>
              Whether you are starting your journey or continuing care, we provide clear guidance and steady companionship at every step.
            </p>
          </div>

          {/* How We Help */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {(howWeHelpBullets[service.slug] || howWeHelpBullets["adult-therapy"]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Conditions Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Conditions We Treat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.conditionSlugs.map((cond) => {
                const meta = conditionMeta[cond];
                const Icon = meta.icon;
                return (
                  <Link key={cond} to={`/services/${service.slug}/conditions/${cond}`}>
                    <Card className="h-full hover:shadow-md transition">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-base">{meta.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{meta.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 rounded-lg border bg-muted/30 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to begin?</h3>
            <p className="text-muted-foreground mb-4">Book an appointment today. We’ll meet you with warmth, expertise, and a plan that fits you.</p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <Link to="/book">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Call Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


