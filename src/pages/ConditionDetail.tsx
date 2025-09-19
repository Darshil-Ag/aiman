import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, getConditionBySlug } from "@/data/services";

export default function ConditionDetail() {
  const { serviceSlug, conditionSlug } = useParams();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const condition = conditionSlug ? getConditionBySlug(conditionSlug) : undefined;

  if (!service || !condition) {
    return (
      <Layout>
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Page not found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = condition.icon;

  const taglines: Record<string, string> = {
    "depression": "Support and treatment to help you heal and grow.",
    "bipolar-disorder": "Steady, comprehensive care for mood stability.",
    "anxiety": "Calm, practical strategies to reduce worry and fear.",
    "sleep-concerns": "Gentle, structured support for more restful nights.",
    "ocd": "Evidence-based care to ease obsessions and compulsions.",
    "stress-concerns": "Tools and support to navigate life's pressures.",
    "personality-disorders": "Respectful, consistent care that builds stability.",
    "adjustment-disorders": "Guidance and support through life changes.",
    "eating-disorders": "Compassionate, safe care for body and mind.",
    "trauma": "Sensitive, paced treatment to help you feel safe again.",
    "grief": "Gentle support through loss and healing.",
    "lgbtqia-concerns": "Affirming, inclusive care you can trust.",
    "gender-issues": "Supportive, respectful care for your journey."
  };

  const symptomExamples: Record<string, string[]> = {
    "depression": ["Persistent sadness or emptiness", "Loss of interest or pleasure", "Changes in sleep or appetite", "Low energy or concentration", "Feelings of guilt or worthlessness"],
    "bipolar-disorder": ["Mood shifts between highs and lows", "Changes in energy and activity", "Sleep disturbances", "Racing thoughts or slowed thinking", "Impact on daily routines"],
    "anxiety": ["Excessive worry or fear", "Restlessness or feeling on edge", "Muscle tension, headaches, or upset stomach", "Difficulty concentrating", "Trouble sleeping"],
    "sleep-concerns": ["Difficulty falling or staying asleep", "Waking unrefreshed", "Daytime fatigue", "Irregular sleep patterns", "Snoring or breathing concerns"],
    "ocd": ["Intrusive, distressing thoughts", "Repetitive behaviors or rituals", "Excessive checking or cleaning", "Need for symmetry or exactness", "Avoidance due to anxiety"],
    "stress-concerns": ["Feeling overwhelmed", "Irritability or mood changes", "Physical symptoms like headaches", "Difficulty relaxing", "Changes in sleep or appetite"],
    "personality-disorders": ["Intense emotions or reactions", "Relationship difficulties", "Impulsive behaviors", "Unstable self-image", "Sensitivity to stress"],
    "adjustment-disorders": ["Difficulty coping after a change", "Sadness, worry, or hopelessness", "Withdrawal from activities", "Trouble focusing", "Sleep or appetite changes"],
    "eating-disorders": ["Preoccupation with food or weight", "Restrictive eating or binge episodes", "Body image concerns", "Physical changes or health issues", "Anxiety around meals"],
    "trauma": ["Intrusive memories or nightmares", "Avoidance of reminders", "Feeling on guard or easily startled", "Negative mood or thoughts", "Sleep difficulties"],
    "grief": ["Deep sadness and longing", "Difficulty concentrating", "Changes in sleep or appetite", "Emotional numbness", "Social withdrawal"],
    "lgbtqia-concerns": ["Stress from discrimination or stigma", "Identity-related anxiety", "Relationship or family challenges", "Low mood or isolation", "Sleep or appetite changes"],
    "gender-issues": ["Distress related to gender identity", "Anxiety or low mood", "Social stressors", "Sleep or appetite changes", "Relationship concerns"],
  };

  const whyChoose = [
    "Expert doctors and licensed therapists",
    "Evidence-based, personalized treatment plans",
    "Warm, private, and safe hospital environment",
    "Coordinated care across therapy and psychiatry"
  ];

  const conditionImageKeywords: Record<string, string> = {
    "depression": "depression,mental health support",
    "bipolar-disorder": "bipolar,mental health,stability",
    "anxiety": "anxiety,calm,therapy",
    "sleep-concerns": "sleep,night,rest",
    "ocd": "ocd,compulsion,order",
    "stress-concerns": "stress,relaxation,calm",
    "personality-disorders": "mental health,therapy,care",
    "adjustment-disorders": "change,transition,support",
    "eating-disorders": "nutrition,care,wellness",
    "trauma": "trauma,recovery,support",
    "grief": "grief,loss,comfort",
    "lgbtqia-concerns": "lgbtq,pride,affirming",
    "gender-issues": "gender,identity,affirming"
  };

  const heroImageUrl = `https://source.unsplash.com/featured/?${encodeURIComponent(
    conditionImageKeywords[conditionSlug as string] || condition.title
  )}`;

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-6">
          <div className="relative w-full aspect-[16/6] overflow-hidden rounded-lg bg-muted">
            <img src={heroImageUrl} alt={condition.title} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">{condition.title}</h1>
          </div>
          <p className="text-muted-foreground mt-2">{taglines[conditionSlug as string] || condition.description}</p>
          </div>
        </div>

        {/* Understanding */}
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            {condition.title} can affect how you feel, think, and relate to the people and activities that matter to you. If you’re struggling, you’re not alone, and there are caring, effective treatments that can help.
          </p>
          <p>
            Our team meets you with respect and compassion. We listen to your story, explain options clearly, and walk alongside you as you take steady, manageable steps toward feeling better.
          </p>
          <p>
            Recovery is possible. With the right support, many people find relief, regain balance, and rebuild confidence in daily life.
          </p>
        </div>

        {/* Symptoms & Signs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Symptoms & Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {(symptomExamples[conditionSlug as string] || []).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* How We Support You */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Support You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At {service.name}, care is coordinated across therapy and psychiatry so you receive what you need, when you need it. Treatment may include individual therapy, skills-based sessions, and, when appropriate, medication support.
              </p>
              <p>
                Your plan is personalized and reviewed regularly. We focus on safety, comfort, and practical tools you can use in daily life. When helpful, we involve family members or loved ones with your consent.
              </p>
              <p>
                If higher levels of support are needed, our hospital services provide a structured, caring environment with 24/7 clinical oversight.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Choose Us</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {whyChoose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="p-6 rounded-lg border bg-muted/30 text-center">
          <h3 className="text-xl font-semibold mb-2">You don’t have to go through this alone</h3>
          <p className="text-muted-foreground mb-4">We’re here to help with kind, expert care tailored to you.</p>
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
    </Layout>
  );
}


