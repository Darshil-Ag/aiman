import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Users, 
  Star, 
  Shield, 
  Award,
  ArrowRight,
  Phone,
  Calendar,
  MessageCircle,
  GraduationCap,
  Clock,
  CheckCircle
} from "lucide-react";

export default function Experts() {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Psychiatrist & Medical Director",
      specialization: "Depression, Anxiety, Bipolar Disorder",
      image: "/placeholder.svg",
      experience: "15+ years",
      qualifications: "MD Psychiatry, Board Certified",
      bio: "Dr. Sarah Johnson is a compassionate psychiatrist with over 15 years of experience in treating mood disorders and anxiety. She believes in a holistic approach to mental health, combining medication management with psychotherapy to help patients achieve lasting recovery.",
      approach: "I believe in treating the whole person, not just symptoms. My approach combines evidence-based treatments with genuine compassion and understanding. Every patient's journey is unique, and I'm here to support you every step of the way.",
      education: "MD in Psychiatry from Johns Hopkins University",
      certifications: ["Board Certified Psychiatrist", "Fellow of the American Psychiatric Association"],
      languages: ["English", "Spanish"],
      availability: "Monday - Friday, 9 AM - 5 PM"
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Clinical Psychologist",
      specialization: "Trauma, PTSD, Cognitive Behavioral Therapy",
      image: "/placeholder.svg",
      experience: "12+ years",
      qualifications: "PhD Clinical Psychology, Licensed Psychologist",
      bio: "Dr. Michael Chen specializes in trauma-informed care and has helped hundreds of patients overcome PTSD and trauma-related disorders. His gentle, patient-centered approach creates a safe space for healing and recovery.",
      approach: "Healing from trauma requires courage, and I'm honored to walk alongside my patients on their journey. I use evidence-based techniques while always prioritizing your comfort and safety in the therapeutic process.",
      education: "PhD in Clinical Psychology from Stanford University",
      certifications: ["Licensed Clinical Psychologist", "Certified in EMDR Therapy", "Trauma-Informed Care Specialist"],
      languages: ["English", "Mandarin"],
      availability: "Tuesday - Saturday, 10 AM - 6 PM"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child & Family Therapist",
      specialization: "Child Psychology, Family Therapy, ADHD",
      image: "/placeholder.svg",
      experience: "10+ years",
      qualifications: "PsyD Clinical Psychology, Licensed Marriage & Family Therapist",
      bio: "Dr. Emily Rodriguez is passionate about supporting children and families through life's challenges. She has extensive experience in treating ADHD, behavioral issues, and family dynamics, always keeping the child's best interests at heart.",
      approach: "Children are incredibly resilient, and families are the foundation of healing. I work collaboratively with both children and parents to create positive change and strengthen family bonds.",
      education: "PsyD in Clinical Psychology from UCLA",
      certifications: ["Licensed Marriage & Family Therapist", "Certified Play Therapist", "ADHD Specialist"],
      languages: ["English", "Spanish"],
      availability: "Monday - Friday, 8 AM - 4 PM"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Addiction Specialist & Recovery Counselor",
      specialization: "Substance Abuse, Alcohol Addiction, Recovery Support",
      image: "/placeholder.svg",
      experience: "14+ years",
      qualifications: "MD Psychiatry, Certified Addiction Medicine Specialist",
      bio: "Dr. Priya Sharma is a dedicated addiction medicine specialist who has helped countless individuals overcome substance abuse and rebuild their lives. Her non-judgmental approach and deep understanding of addiction create a supportive environment for recovery.",
      approach: "Addiction is a disease, not a moral failing. I believe in meeting people where they are and providing compassionate, evidence-based care that respects each person's dignity and potential for recovery.",
      education: "MD in Psychiatry from Harvard Medical School",
      certifications: ["Board Certified in Addiction Medicine", "Certified Recovery Coach", "Substance Abuse Treatment Specialist"],
      languages: ["English", "Hindi"],
      availability: "Monday - Friday, 7 AM - 3 PM"
    },
    {
      name: "Dr. James Wilson",
      role: "Geriatric Psychiatrist",
      specialization: "Elderly Mental Health, Dementia, Late-Life Depression",
      image: "/placeholder.svg",
      experience: "18+ years",
      qualifications: "MD Psychiatry, Geriatric Psychiatry Fellowship",
      bio: "Dr. James Wilson specializes in mental health care for older adults, bringing compassion and expertise to the unique challenges of aging. He understands the complex interplay between physical health, medications, and mental well-being in older populations.",
      approach: "Aging brings wisdom and experience, but also unique mental health challenges. I'm committed to helping older adults maintain their dignity, independence, and quality of life through personalized, respectful care.",
      education: "MD in Psychiatry from Columbia University",
      certifications: ["Fellowship in Geriatric Psychiatry", "Board Certified in Geriatric Psychiatry", "Dementia Care Specialist"],
      languages: ["English"],
      availability: "Monday - Thursday, 9 AM - 5 PM"
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Women's Mental Health Specialist",
      specialization: "Perinatal Mental Health, Hormonal Disorders, Trauma",
      image: "/placeholder.svg",
      experience: "11+ years",
      qualifications: "MD Psychiatry, Women's Mental Health Fellowship",
      bio: "Dr. Lisa Thompson is passionate about women's mental health and understands the unique challenges women face throughout their lives. She specializes in perinatal mental health, hormonal mood disorders, and trauma-informed care for women.",
      approach: "Women's mental health deserves specialized attention and understanding. I provide a safe, supportive space where women can explore their experiences and find healing that honors their strength and resilience.",
      education: "MD in Psychiatry from Yale University",
      certifications: ["Fellowship in Women's Mental Health", "Perinatal Mental Health Specialist", "Trauma-Informed Care Certified"],
      languages: ["English", "French"],
      availability: "Monday - Friday, 10 AM - 6 PM"
    },
    {
      name: "Dr. Robert Kim",
      role: "Neuropsychologist",
      specialization: "ADHD, Learning Disabilities, Cognitive Assessment",
      image: "/placeholder.svg",
      experience: "13+ years",
      qualifications: "PhD Neuropsychology, Licensed Psychologist",
      bio: "Dr. Robert Kim is a neuropsychologist who specializes in understanding how brain function affects behavior and learning. He conducts comprehensive assessments and works with individuals to develop strategies that work with their unique cognitive profile.",
      approach: "Every brain is different, and understanding your unique cognitive strengths and challenges is the first step toward success. I help people work with their brain, not against it, to achieve their goals.",
      education: "PhD in Neuropsychology from University of California, Berkeley",
      certifications: ["Licensed Neuropsychologist", "ADHD Assessment Specialist", "Learning Disability Expert"],
      languages: ["English", "Korean"],
      availability: "Tuesday - Saturday, 9 AM - 5 PM"
    },
    {
      name: "Dr. Maria Garcia",
      role: "Couples & Family Therapist",
      specialization: "Relationship Counseling, Family Dynamics, Communication",
      image: "/placeholder.svg",
      experience: "9+ years",
      qualifications: "PhD Clinical Psychology, Licensed Marriage & Family Therapist",
      bio: "Dr. Maria Garcia specializes in helping couples and families navigate relationship challenges and improve communication. She believes that healthy relationships are the foundation of mental well-being and works to strengthen family bonds.",
      approach: "Relationships are the heart of human experience. I help couples and families build stronger connections, improve communication, and create healthier patterns that support everyone's well-being.",
      education: "PhD in Clinical Psychology from University of Texas",
      certifications: ["Licensed Marriage & Family Therapist", "Gottman Method Certified", "Family Systems Specialist"],
      languages: ["English", "Spanish"],
      availability: "Monday - Friday, 2 PM - 8 PM"
    }
  ];

  const teamStats = [
    { number: "8+", label: "Expert Professionals" },
    { number: "100+", label: "Combined Years of Experience" },
    { number: "5000+", label: "Lives Transformed" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-950/30 dark:via-purple-950/30 dark:to-indigo-950/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2E3NTlmOSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNNTAgMEwxMDAgNTBMNTAgMTAwTDAgNTB6Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-violet-200 text-violet-800 dark:bg-violet-800 dark:text-violet-200 border-violet-300 dark:border-violet-700">
              Our Expert Team
            </Badge>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl text-violet-900 dark:text-violet-100">
              Meet Our Compassionate Experts
            </h1>
            <p className="text-xl text-violet-700 dark:text-violet-300 sm:text-2xl leading-relaxed max-w-3xl mx-auto">
              Our team of highly qualified mental health professionals is dedicated to providing 
              compassionate, evidence-based care tailored to your unique needs and circumstances.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-violet-200 dark:bg-violet-800/50 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-violet-800 dark:text-violet-200">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-violet-200 dark:bg-violet-800/50 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-violet-800 dark:text-violet-200">Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 bg-violet-200 dark:bg-violet-800/50 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-violet-800 dark:text-violet-200">Confidential & Safe</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Choose Our Expert Team?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Highly Qualified</h3>
                <p className="text-muted-foreground">
                  All our experts hold advanced degrees and are licensed professionals with specialized training in their areas of expertise.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  We believe in treating every patient with empathy, respect, and understanding, creating a safe space for healing and growth.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confidential & Safe</h3>
                <p className="text-muted-foreground">
                  Your privacy and confidentiality are our top priorities. We maintain the highest standards of professional ethics and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profiles */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet the compassionate professionals who are here to support your mental health journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {experts.map((expert, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{expert.name}</CardTitle>
                        <CardDescription className="text-primary font-medium text-base">
                          {expert.role}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {expert.specialization}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">ABOUT</h4>
                      <p className="text-sm leading-relaxed">
                        {expert.bio}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">APPROACH TO CARE</h4>
                      <p className="text-sm leading-relaxed italic">
                        "{expert.approach}"
                      </p>
                    </div>

                    {/* Qualifications */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-1">Experience</h5>
                        <p>{expert.experience}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-1">Education</h5>
                        <p className="truncate" title={expert.education}>
                          {expert.education}
                        </p>
                      </div>
                    </div>

                    {/* Languages & Availability */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-1">Languages</h5>
                        <p>{expert.languages.join(", ")}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-1">Availability</h5>
                        <p className="truncate" title={expert.availability}>
                          {expert.availability}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t">
                      <Button size="sm" className="w-full group">
                        <Calendar className="mr-2 w-4 h-4" />
                        Book with {expert.name.split(' ')[0]}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Connect with Our Experts?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our compassionate team is here to provide the expert care and support you need. 
              Take the first step towards better mental health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 w-5 h-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 w-5 h-5" />
                Call Our Team
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              All consultations are confidential and tailored to your specific needs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
