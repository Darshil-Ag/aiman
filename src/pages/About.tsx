import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  Brain, 
  Shield, 
  Lightbulb, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  TrendingUp,
  UserCheck,
  MessageCircle,
  Building2
} from "lucide-react";

export default function About() {
  const approachPillars = [
    {
      icon: Brain,
      title: "Led & built by mental health experts",
      description: "AIMAN was built by leaders in the mental health field. Our founder and co-founder bring the best of both worlds - strong clinical expertise and decades of experience, combined with a deep understanding of the lived experience of mental health concerns.",
      details: [
        "Multidisciplinary team of 50+ mental health professionals",
        "Extensive experience in the field",
        "Highly qualified and trained to support clients",
        "Proprietary clinical protocols for different conditions"
      ]
    },
    {
      icon: Heart,
      title: "Personalised care based on science",
      description: "We put your mental health needs at the centre of everything we build. Our evidence-based approach ensures that each treatment plan is tailored to your unique needs and circumstances.",
      details: [
        "Evidence-based treatment protocols",
        "Personalized care plans",
        "Latest scientific research integration",
        "Continuous monitoring and adjustment"
      ]
    },
    {
      icon: Globe,
      title: "An integrated ecosystem of care",
      description: "Our 360° care model allows us to support you with all your needs. From initial assessment to ongoing support, we provide comprehensive care throughout your mental health journey.",
      details: [
        "Comprehensive assessment and diagnosis",
        "Multi-modal treatment approaches",
        "Ongoing support and follow-up",
        "Family and community integration"
      ]
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Amit Malik",
      role: "Founder and CEO",
      image: "/placeholder.svg",
      description: "Renowned psychiatrist and healthcare entrepreneur with over 20 years of experience in mental health care."
    },
    {
      name: "Neha Kirpal",
      role: "Co-founder",
      image: "/placeholder.svg",
      description: "Social entrepreneur and global mental health ambassador, bringing innovation to mental health care delivery."
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "/placeholder.svg",
      description: "Leading psychiatrist specializing in anxiety disorders and stress management with 15+ years of experience."
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Director",
      image: "/placeholder.svg",
      description: "Expert in depression treatment and cognitive behavioral therapy with extensive research background."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Child & Family Services",
      image: "/placeholder.svg",
      description: "Specialist in child psychology and family therapy, dedicated to supporting young minds and families."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Research & Development",
      image: "/placeholder.svg",
      description: "Research psychologist focused on developing innovative treatment protocols and evidence-based practices."
    }
  ];

  const stats = [
    { number: "6M+", label: "users who have changed their lives and worked on their mental health with AIMAN" },
    { number: "220K+", label: "sessions taken by our clients with our therapists and psychiatrists" },
    { number: "50K+", label: "members in the AIMAN Community receiving peer support" },
    { number: "120+", label: "partnerships with leading organisations" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjYTc1OWY5IiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTQwIDBMODAgNDBMNDAgODBMMCA0MHoiLz48L2c+PC9zdmc+')] opacity-40 animate-pulse"></div>
        <div className="container px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 text-sm font-medium animate-bounce">
              About AIMAN
            </Badge>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
                About AIMAN
            </h1>
            </div>
            <div className="space-y-6 text-muted-foreground animate-fade-in-up animation-delay-400">
              <p className="text-xl sm:text-2xl leading-relaxed font-medium">
                AIMAN, formerly named InnerHour, is a mental health organisation founded in the year 2016 by renowned psychiatrist and healthcare entrepreneur,{" "}
                <span className="text-primary font-semibold">Dr. Amit Malik</span>.
              </p>
              <p className="text-lg leading-relaxed">
                The organisation aims to create a mental health ecosystem that provides treatment and care plans for a range of mental health conditions like{" "}
                <span className="text-primary font-medium">anxiety, depression, bipolar disorder, ADHD, OCD, and schizophrenia</span>, and addictions.
              </p>
              <p className="text-lg leading-relaxed">
                In 2019, <span className="text-primary font-semibold">Ms. Neha Kirpal</span>, a social entrepreneur and global mental health ambassador, joined AIMAN as Co-founder.
              </p>
            </div>
            <div className="mt-8 flex justify-center animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Transforming Mental Healthcare in India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4 text-sm font-medium">
                The Problem
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                India's mental health is in a state of crisis
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                <p>
                  While <span className="text-red-600 dark:text-red-400 font-semibold">1 billion people</span> around the world live with a mental health condition, India alone accounts for a <span className="text-red-600 dark:text-red-400 font-semibold">third of the global burden</span> of depressive disorders. India has the youngest population in the world - and yet, over <span className="text-red-600 dark:text-red-400 font-semibold">100 million children and youth</span> have diagnosed mental health conditions.
                </p>
              </div>
              <p>
                Due to a combination of <span className="text-primary font-medium">poor awareness, stigma, and lack of access to quality care</span>, a person who is struggling with their mental health often does not receive the treatment and care they need to get better.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* The AIMAN Solution */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container px-4 relative">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                The AIMAN Solution
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Transforming mental healthcare delivery in India
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-l-4 border-green-500">
                <p>
                  AIMAN is transforming the way mental healthcare is delivered in India, by bringing together the <span className="text-green-600 dark:text-green-400 font-semibold">latest science in clinical practice</span> and <span className="text-green-600 dark:text-green-400 font-semibold">modern technological tools</span> to deliver the best outcome for each individual and family. Our integrated mental health ecosystem offers treatment, care and support for all kinds of mental health concerns.
                </p>
              </div>
              <p>
                Using the experience and expertise of our team of trained mental health professionals, we strive to ensure that each individual can navigate their mental healthcare journey <span className="text-primary font-medium">seamlessly and easily</span>.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-primary font-semibold text-center text-xl">
                  "No matter where you are in your mental health journey, AIMAN will meet you there and partner with you - so you can feel better, get better, and stay better."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AIMAN Approach */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
                The AIMAN Approach
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our mission is simple - to help you feel better, get better and stay better.
            </h2>
            </div>

            <div className="space-y-12">
              {approachPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-4">{pillar.title}</CardTitle>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {pillar.description}
                          </p>
                          <ul className="space-y-2">
                            {pillar.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardHeader>
            </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Impact Stats Widget */}
      <section className="py-20 bg-gradient-to-r from-lavender-50 to-violet-50 dark:from-lavender-950/10 dark:to-violet-950/10">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6 text-sm font-medium bg-lavender-100 text-lavender-800 dark:bg-lavender-900 dark:text-lavender-200">
                We've made your mental health our priority
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-lavender-900 dark:text-lavender-100">
                At AIMAN, we have 200+ experts from different backgrounds
              </h2>
              <p className="text-lg text-lavender-700 dark:text-lavender-300">
                therapy, psychiatry, technology, and business - who are all committed to your care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-lavender-600 dark:text-lavender-400 mb-3">
                      {stat.number}
                    </div>
                    <div className="text-sm text-lavender-700 dark:text-lavender-300 leading-relaxed font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values Widget */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lavender-900 dark:text-lavender-100 mb-4">
                Our Professional Values
              </h2>
              <p className="text-lavender-700 dark:text-lavender-300 max-w-3xl mx-auto">
                These core values guide every interaction and decision we make in providing mental healthcare.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900/50">
                    <Heart className="h-8 w-8 text-lavender-600 dark:text-lavender-400" />
                  </div>
                  <CardTitle className="text-xl text-lavender-900 dark:text-lavender-100">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lavender-700 dark:text-lavender-300">
                    We approach every patient with empathy, understanding, and genuine care for their well-being.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                    <Shield className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                  </div>
                  <CardTitle className="text-xl text-violet-900 dark:text-violet-100">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-violet-700 dark:text-violet-300">
                    We maintain the highest standards of clinical practice and continuously improve our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-purple-900 dark:text-purple-100">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300">
                    We uphold the highest ethical standards and maintain complete confidentiality in all our interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Founder's Note
              </Badge>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    In a country as large and underserved as India, I believe ensuring early access to high quality mental health services is critical for effective and lasting recovery.
                  </p>
                  <p>
                    At AIMAN, our vision is to provide trusted mental healthcare in all our centres across India, as well as online from dawn to midnight - 365 days a year. We have worked hard over the years to ensure that mental healthcare is easily accessible, affordable, and driving real changes in the individual's mental health outcomes.
                  </p>
                  <p>
                    We're deeply invested in providing clients with access to coordinated, structured and scientific solutions through our comprehensive suite of mental health offerings.
                  </p>
                  <p>
                    From a 5-member team of people who spent sleepless nights building India's leading mental health platform, we're now a group of 200+ who live and breathe mental health and are working relentlessly to create an ecosystem that offers quality care - anytime, anywhere.
              </p>
            </div>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Dr. Amit Malik</h3>
                      <p className="text-primary font-medium">Founder and CEO</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
                Meet The Leaders at AIMAN
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Led, designed and managed by a diverse group of individuals
            </h2>
            <p className="text-lg text-muted-foreground">
                driven by a common mission - to deliver the best mental healthcare to anyone who needs it.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Get in touch with us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Need help finding the right mental health support?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Connect with us</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Want mental health support for your organisation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">PARTNER WITH US</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Looking to be a part of AIMAN's team?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">WORK WITH US</Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                If you didn't find what you were looking for, please reach out to us at{" "}
                <a href="mailto:contact@aiman.com" className="text-primary hover:underline">
                  contact@aiman.com
                </a>{" "}
                or{" "}
                <a href="tel:+912071171501" className="text-primary hover:underline">
                  +91 20 7117 1501
                </a>
                . We're here for you - for anything you might need.
              </p>
              </div>
              </div>
              </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-muted/50 border-t">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
                Disclaimer
              </h3>
              <div className="text-sm text-amber-700 dark:text-amber-300 space-y-2 leading-relaxed">
                <p>
                  AIMAN is equipped to provide care and support for individuals experiencing severe psychological distress, including complex psychiatric disorders and other complex conditions. For those in need of more intensive care and daily support, we are launching an in-patient care facility in Bengaluru soon.
                </p>
                <p>
                  If you or someone you know is experiencing at-risk behaviors or safety concerns, or any other life-threatening crisis or critical mental health situation, contact a helpline or go to the nearest hospital or emergency room. Having a close family member or friend with you for support can be invaluable during this time.
                </p>
                <p>
                  For emergency mental health support, please call the national Tele MANAS helpline at{" "}
                  <a href="tel:18008914416" className="font-semibold underline">
                    1-800 891 4416
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}