import { 
  Heart, Brain, Hospital, Baby, Users, Sparkles,
  Smile, Moon, AlertTriangle, Layers, Flame, Shield, 
  Activity, CloudRain, Zap, Rainbow 
} from "lucide-react";

export type ServiceSlug =
  | "adult-therapy"
  | "adult-psychiatry"
  | "mental-health-hospital"
  | "children-first-services"
  | "couples-therapy"
  | "self-care";

export type ConditionSlug =
  | "depression"
  | "bipolar-disorder"
  | "anxiety"
  | "sleep-concerns"
  | "ocd"
  | "stress-concerns"
  | "personality-disorders"
  | "adjustment-disorders"
  | "eating-disorders"
  | "trauma"
  | "grief"
  | "lgbtqia-concerns"
  | "gender-issues";

export const allConditionSlugs: ConditionSlug[] = [
  "depression",
  "bipolar-disorder",
  "anxiety",
  "sleep-concerns",
  "ocd",
  "stress-concerns",
  "personality-disorders",
  "adjustment-disorders",
  "eating-disorders",
  "trauma",
  "grief",
  "lgbtqia-concerns",
  "gender-issues"
];

export const conditionMeta: Record<ConditionSlug, { title: string; icon: any; description: string; }>= {
  "depression": { title: "Depression", icon: Smile, description: "Persistent sadness, loss of interest, and low energy impacting daily life." },
  "bipolar-disorder": { title: "Bipolar Disorder", icon: Zap, description: "Mood swings ranging from depressive lows to manic highs." },
  "anxiety": { title: "Anxiety", icon: AlertTriangle, description: "Excessive worry, restlessness, and physical symptoms like palpitations." },
  "sleep-concerns": { title: "Sleep Concerns", icon: Moon, description: "Insomnia, irregular sleep, or non-restorative sleep affecting wellbeing." },
  "ocd": { title: "OCD", icon: Shield, description: "Obsessions and compulsions that interfere with normal functioning." },
  "stress-concerns": { title: "Stress Concerns", icon: Activity, description: "Chronic stress causing emotional and physical strain." },
  "personality-disorders": { title: "Personality Disorders", icon: Layers, description: "Enduring patterns affecting relationships and self-perception." },
  "adjustment-disorders": { title: "Adjustment Disorders", icon: CloudRain, description: "Difficulty coping with life changes or stressors." },
  "eating-disorders": { title: "Eating Disorders", icon: Flame, description: "Concerns around eating, weight, and body image." },
  "trauma": { title: "Trauma", icon: Shield, description: "Emotional response to distressing events, including PTSD symptoms." },
  "grief": { title: "Grief", icon: Heart, description: "Bereavement and loss-related emotional distress." },
  "lgbtqia-concerns": { title: "LGBTQIA+ Concerns", icon: Rainbow, description: "Affirming care for identity, orientation, and related stressors." },
  "gender-issues": { title: "Gender Issues", icon: Rainbow, description: "Support for gender identity exploration and related challenges." }
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  description: string;
  image: string;
  nowOpen?: boolean;
  intro: string;
  icon: any;
  conditionSlugs: ConditionSlug[];
};

export const services: Service[] = [
  {
    slug: "adult-therapy",
    name: "Adult Therapy",
    description: "Compassionate psychotherapy tailored for adults navigating life's challenges.",
    image: "https://source.unsplash.com/featured/?therapy,counseling",
    intro: "Our Adult Therapy service offers evidence-based psychotherapy to improve emotional wellbeing and resilience.",
    icon: Brain,
    conditionSlugs: allConditionSlugs,
  },
  {
    slug: "adult-psychiatry",
    name: "Adult Psychiatry",
    description: "Expert psychiatric evaluation, diagnosis, and medication management.",
    image: "https://source.unsplash.com/featured/?psychiatry,doctor,mental%20health",
    intro: "Board-certified psychiatrists provide thorough assessments and ongoing management for mental health conditions.",
    icon: Heart,
    conditionSlugs: allConditionSlugs,
  },
  {
    slug: "mental-health-hospital",
    name: "Mental Health Hospital",
    description: "24/7 multi-disciplinary inpatient and day-care services.",
    image: "https://source.unsplash.com/featured/?hospital,healthcare%20building",
    nowOpen: true,
    intro: "Our modern mental health hospital provides comprehensive, round-the-clock care in a healing environment.",
    icon: Hospital,
    conditionSlugs: allConditionSlugs,
  },
  {
    slug: "children-first-services",
    name: "Children First Services",
    description: "Specialized child and adolescent mental health support.",
    image: "https://source.unsplash.com/featured/?children,kids%20therapy",
    intro: "Developmentally appropriate therapy and psychiatry for children and teens, with family-centered approaches.",
    icon: Baby,
    conditionSlugs: allConditionSlugs,
  },
  {
    slug: "couples-therapy",
    name: "Couples Therapy",
    description: "Improve communication, resolve conflict, and strengthen bonds.",
    image: "https://source.unsplash.com/featured/?couple,relationship%20counseling",
    intro: "Therapeutic support for couples to build trust, manage conflict, and grow together.",
    icon: Users,
    conditionSlugs: allConditionSlugs,
  },
  {
    slug: "self-care",
    name: "Self-Care",
    description: "Workshops and programs for daily mental wellness.",
    image: "https://source.unsplash.com/featured/?wellness,meditation,self-care",
    intro: "Structured guidance to build self-care practices for sustainable mental wellbeing.",
    icon: Sparkles,
    conditionSlugs: allConditionSlugs,
  }
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);

export const getConditionBySlug = (slug: string) => {
  return conditionMeta[slug as ConditionSlug];
};


