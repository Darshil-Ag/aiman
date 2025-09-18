import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Shield, 
  Star,
  ArrowRight,
  Phone,
  Calendar,
  MessageCircle,
  TrendingUp,
  Activity,
  Zap,
  Target
} from "lucide-react";

export default function Conditions() {
  const conditions = [
    {
      icon: Heart,
      title: "Depression",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      textColor: "text-blue-600 dark:text-blue-400",
      definition: "Depression is more than just feeling sad - it's a persistent feeling of sadness, hopelessness, and loss of interest that affects how you think, feel, and handle daily activities. It's a common but serious mood disorder that requires understanding and professional care.",
      symptoms: [
        "Persistent sadness, anxiety, or emptiness",
        "Loss of interest in activities once enjoyed",
        "Fatigue and decreased energy",
        "Difficulty concentrating or making decisions",
        "Changes in sleep patterns (insomnia or oversleeping)",
        "Changes in appetite or weight",
        "Feelings of worthlessness or guilt",
        "Thoughts of death or suicide"
      ],
      impact: "Untreated depression can significantly impact your work performance, relationships, and physical health. It can lead to social isolation, substance abuse, and in severe cases, suicidal thoughts. Early intervention is crucial for recovery.",
      treatments: [
        "Cognitive Behavioral Therapy (CBT)",
        "Interpersonal Therapy (IPT)",
        "Medication management when appropriate",
        "Lifestyle modifications and self-care strategies",
        "Support groups and peer counseling",
        "Mindfulness and relaxation techniques"
      ],
      hopefulMessage: "Depression is highly treatable, and most people who seek help see significant improvement. With the right support and treatment, you can regain your joy, energy, and sense of purpose in life."
    },
    {
      icon: Brain,
      title: "Anxiety",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      textColor: "text-green-600 dark:text-green-400",
      definition: "Anxiety is your body's natural response to stress, but when it becomes excessive, persistent, and interferes with daily life, it may be an anxiety disorder. It's characterized by excessive worry, fear, and physical symptoms that can be overwhelming.",
      symptoms: [
        "Excessive worry or fear",
        "Restlessness or feeling on edge",
        "Difficulty concentrating",
        "Irritability",
        "Muscle tension",
        "Sleep disturbances",
        "Panic attacks",
        "Avoidance of anxiety-provoking situations"
      ],
      impact: "Untreated anxiety can lead to panic attacks, social isolation, and avoidance behaviors that limit your life experiences. It can also contribute to physical health problems and interfere with work, relationships, and daily activities.",
      treatments: [
        "Cognitive Behavioral Therapy (CBT)",
        "Exposure therapy",
        "Relaxation techniques and breathing exercises",
        "Medication when appropriate",
        "Lifestyle changes and stress management",
        "Support groups and peer support"
      ],
      hopefulMessage: "Anxiety disorders are among the most treatable mental health conditions. With proper treatment, you can learn to manage your anxiety and live a fulfilling, confident life."
    },
    {
      icon: AlertTriangle,
      title: "Alcohol Addiction",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      textColor: "text-red-600 dark:text-red-400",
      definition: "Alcohol addiction, or alcohol use disorder, is a chronic disease characterized by uncontrolled drinking and preoccupation with alcohol. It's not a moral failing but a medical condition that requires compassionate, professional treatment.",
      symptoms: [
        "Inability to control alcohol consumption",
        "Drinking more or longer than intended",
        "Spending excessive time drinking or recovering",
        "Cravings for alcohol",
        "Continued drinking despite negative consequences",
        "Neglecting responsibilities due to drinking",
        "Withdrawal symptoms when not drinking",
        "Tolerance requiring more alcohol for the same effect"
      ],
      impact: "Untreated alcohol addiction can lead to serious health problems, relationship breakdowns, financial difficulties, and legal issues. It can also contribute to depression, anxiety, and other mental health conditions.",
      treatments: [
        "Detoxification and medical supervision",
        "Individual and group therapy",
        "12-step programs and peer support",
        "Medication-assisted treatment",
        "Family therapy and support",
        "Aftercare planning and relapse prevention"
      ],
      hopefulMessage: "Recovery from alcohol addiction is absolutely possible. Many people have successfully overcome addiction and rebuilt their lives. With the right support and treatment, you can achieve lasting sobriety and rediscover your true self."
    },
    {
      icon: Target,
      title: "OCD (Obsessive-Compulsive Disorder)",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      textColor: "text-purple-600 dark:text-purple-400",
      definition: "OCD is a mental health condition characterized by unwanted, intrusive thoughts (obsessions) and repetitive behaviors (compulsions) that you feel driven to perform. It's not about being 'neat' or 'organized' - it's a serious condition that can significantly impact daily life.",
      symptoms: [
        "Intrusive, unwanted thoughts or images",
        "Repetitive behaviors or mental acts",
        "Excessive cleaning or handwashing",
        "Checking behaviors (locks, appliances, etc.)",
        "Counting, arranging, or organizing compulsions",
        "Hoarding behaviors",
        "Mental rituals or prayers",
        "Avoidance of triggers or situations"
      ],
      impact: "Untreated OCD can consume hours of your day, interfere with work and relationships, and cause significant distress. It can lead to social isolation and make daily activities extremely difficult to complete.",
      treatments: [
        "Exposure and Response Prevention (ERP) therapy",
        "Cognitive Behavioral Therapy (CBT)",
        "Medication management",
        "Mindfulness-based approaches",
        "Family education and support",
        "Support groups for OCD"
      ],
      hopefulMessage: "OCD is highly treatable with the right approach. Many people with OCD learn to manage their symptoms effectively and live full, productive lives. You don't have to let OCD control your life."
    },
    {
      icon: Activity,
      title: "Bipolar Disorder",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      textColor: "text-yellow-600 dark:text-yellow-400",
      definition: "Bipolar disorder is a mental health condition that causes extreme mood swings, including emotional highs (mania or hypomania) and lows (depression). These mood episodes can last for days, weeks, or even months and can significantly impact daily functioning.",
      symptoms: [
        "Manic episodes: elevated mood, increased energy, racing thoughts",
        "Depressive episodes: sadness, hopelessness, low energy",
        "Rapid mood changes",
        "Changes in sleep patterns",
        "Impulsive or risky behaviors during manic phases",
        "Difficulty concentrating",
        "Changes in appetite",
        "Thoughts of suicide during depressive episodes"
      ],
      impact: "Untreated bipolar disorder can lead to relationship problems, job loss, financial difficulties, and increased risk of suicide. It can also contribute to substance abuse and other mental health conditions.",
      treatments: [
        "Mood stabilizers and other medications",
        "Psychotherapy and counseling",
        "Lifestyle management and routine",
        "Family therapy and education",
        "Support groups",
        "Crisis intervention planning"
      ],
      hopefulMessage: "With proper treatment and support, people with bipolar disorder can lead stable, fulfilling lives. Many successful individuals have bipolar disorder and have learned to manage their condition effectively."
    },
    {
      icon: Zap,
      title: "Adult ADHD",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      textColor: "text-orange-600 dark:text-orange-400",
      definition: "Adult ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition that affects attention, impulse control, and activity levels. While often diagnosed in childhood, many adults live with undiagnosed ADHD that can significantly impact their daily lives.",
      symptoms: [
        "Difficulty focusing or concentrating",
        "Easily distracted",
        "Forgetfulness and disorganization",
        "Impulsivity in decision-making",
        "Restlessness or hyperactivity",
        "Difficulty completing tasks",
        "Time management challenges",
        "Relationship and work difficulties"
      ],
      impact: "Untreated ADHD in adults can lead to chronic underachievement, relationship problems, financial difficulties, and low self-esteem. It can also contribute to anxiety, depression, and substance abuse.",
      treatments: [
        "Stimulant and non-stimulant medications",
        "Cognitive Behavioral Therapy (CBT)",
        "Skills training and coaching",
        "Lifestyle modifications and routines",
        "Support groups and peer support",
        "Family education and support"
      ],
      hopefulMessage: "ADHD is a manageable condition, and many adults with ADHD are highly successful once they receive proper treatment and support. Your unique perspective and energy can be your greatest strengths."
    },
    {
      icon: Shield,
      title: "Tobacco Addiction",
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
      borderColor: "border-gray-200 dark:border-gray-800",
      textColor: "text-gray-600 dark:text-gray-400",
      definition: "Tobacco addiction is a chronic condition characterized by compulsive tobacco use despite harmful consequences. It's one of the most common addictions and can involve cigarettes, cigars, chewing tobacco, or other tobacco products.",
      symptoms: [
        "Inability to quit despite wanting to",
        "Withdrawal symptoms when not using tobacco",
        "Cravings for tobacco products",
        "Continued use despite health problems",
        "Spending excessive time obtaining or using tobacco",
        "Neglecting activities due to tobacco use",
        "Tolerance requiring more tobacco for the same effect",
        "Using tobacco to cope with stress or emotions"
      ],
      impact: "Tobacco addiction can lead to serious health problems including cancer, heart disease, and respiratory issues. It can also cause financial strain, social stigma, and contribute to other mental health conditions.",
      treatments: [
        "Nicotine replacement therapy",
        "Behavioral counseling and therapy",
        "Medication-assisted treatment",
        "Support groups and peer programs",
        "Lifestyle changes and stress management",
        "Relapse prevention strategies"
      ],
      hopefulMessage: "Quitting tobacco is one of the best decisions you can make for your health. With the right support and treatment plan, you can break free from tobacco addiction and enjoy better health and freedom."
    },
    {
      icon: Users,
      title: "Social Anxiety",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      textColor: "text-pink-600 dark:text-pink-400",
      definition: "Social anxiety disorder is an intense, persistent fear of being watched, judged, or embarrassed in social situations. It's more than just shyness - it's a debilitating condition that can prevent you from living your life to the fullest.",
      symptoms: [
        "Intense fear of social situations",
        "Fear of being judged or embarrassed",
        "Avoidance of social activities",
        "Physical symptoms like sweating, trembling, or nausea",
        "Difficulty speaking in groups",
        "Fear of eating or drinking in public",
        "Worry about upcoming social events",
        "Low self-esteem and self-consciousness"
      ],
      impact: "Untreated social anxiety can lead to social isolation, missed opportunities, and difficulty forming relationships. It can also contribute to depression and other mental health conditions, significantly limiting your quality of life.",
      treatments: [
        "Cognitive Behavioral Therapy (CBT)",
        "Exposure therapy",
        "Social skills training",
        "Medication when appropriate",
        "Support groups",
        "Relaxation techniques and mindfulness"
      ],
      hopefulMessage: "Social anxiety is highly treatable, and many people learn to overcome their fears and build confidence in social situations. You deserve to feel comfortable and confident in your interactions with others."
    },
    {
      icon: Heart,
      title: "Women's Health (Mental Health Focus)",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/20",
      borderColor: "border-rose-200 dark:border-rose-800",
      textColor: "text-rose-600 dark:text-rose-400",
      definition: "Women's mental health encompasses unique challenges and conditions that affect women throughout their lives, including hormonal changes, pregnancy-related mental health issues, and gender-specific stressors. We provide specialized, compassionate care for women's mental health needs.",
      symptoms: [
        "Mood changes related to hormonal cycles",
        "Pregnancy-related anxiety or depression",
        "Postpartum depression or anxiety",
        "Perimenopause and menopause-related mood changes",
        "Body image concerns and eating disorders",
        "Trauma-related symptoms",
        "Work-life balance stress",
        "Relationship and family pressures"
      ],
      impact: "Untreated women's mental health issues can affect relationships, work performance, and overall quality of life. They can also impact children and family dynamics, making early intervention crucial for the whole family's well-being.",
      treatments: [
        "Gender-sensitive therapy approaches",
        "Hormonal and medication management",
        "Pregnancy and postpartum support",
        "Trauma-informed care",
        "Body image and self-esteem work",
        "Support groups for women"
      ],
      hopefulMessage: "Your mental health matters, and you deserve specialized care that understands the unique challenges women face. With the right support, you can navigate life's transitions with confidence and strength."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 via-violet-50 to-purple-50 dark:from-lavender-950/20 dark:via-violet-950/20 dark:to-purple-950/20 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjYTc1OWY5IiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-lavender-100 text-lavender-800 dark:bg-lavender-900 dark:text-lavender-200">
              Conditions We Support
            </Badge>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl text-lavender-900 dark:text-lavender-100">
              Mental Health Conditions We Support
            </h1>
            <p className="text-xl text-lavender-700 dark:text-lavender-300 sm:text-2xl leading-relaxed max-w-3xl mx-auto">
              We provide compassionate, evidence-based care for a wide range of mental health conditions. 
              You're not alone in your journey, and recovery is possible.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 text-lavender-600 dark:text-lavender-400 bg-lavender-100 dark:bg-lavender-900/50 px-6 py-3 rounded-full">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Compassionate Care for Every Condition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className={`${condition.bgColor} ${condition.borderColor} border-b`}>
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${condition.bgColor} ${condition.borderColor} border-2`}>
                          <Icon className={`w-6 h-6 ${condition.textColor}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{condition.title}</CardTitle>
                          <CardDescription className="text-base mt-2">
                            {condition.definition}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      {/* Symptoms */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-primary" />
                          Common Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {condition.symptoms.slice(0, 4).map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{symptom}</span>
                            </li>
                          ))}
                          {condition.symptoms.length > 4 && (
                            <li className="text-sm text-muted-foreground italic">
                              + {condition.symptoms.length - 4} more symptoms
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Impact on Daily Life
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {condition.impact}
                        </p>
                      </div>

                      {/* Treatments */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Our Treatment Options
                        </h4>
                        <ul className="space-y-2">
                          {condition.treatments.slice(0, 3).map((treatment, treatmentIndex) => (
                            <li key={treatmentIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{treatment}</span>
                            </li>
                          ))}
                          {condition.treatments.length > 3 && (
                            <li className="text-sm text-muted-foreground italic">
                              + {condition.treatments.length - 3} more treatment options
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Hopeful Message */}
                      <div className={`${condition.bgColor} p-4 rounded-lg ${condition.borderColor} border`}>
                        <p className="text-sm font-medium leading-relaxed">
                          {condition.hopefulMessage}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="w-full group">
                          Get Help for {condition.title}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Don't let mental health challenges hold you back. Our compassionate team is here to provide 
              the support and treatment you need to live your best life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 w-5 h-5" />
                Call for Support
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Confidential and compassionate care available 24/7
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
