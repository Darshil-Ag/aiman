import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs: { q: string; a: string }[] = Array.from({ length: 50 }).map((_, i) => ({
  q: `General mental health question #${i + 1}`,
  a: "This is a general, patient-friendly answer provided for information and reassurance.",
}));

export default function Help() {
  return (
    <div className="container px-4 py-10 max-w-6xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-2">Help & FAQ</Badge>
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-2">Answers to common questions about therapy, psychiatry, pricing, policies, and first visits.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>How therapy works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Therapy is a conversation with a trained professional in a private, respectful setting. Together, you explore your concerns, build skills, and work toward goals at your pace.</p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>How psychiatry works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Psychiatrists are medical doctors who can evaluate, diagnose, and prescribe. Many people benefit from a combination of therapy and thoughtful medication management.</p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Pricing & policies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">We offer transparent pricing. Please contact us for current fees. We have clear cancellation policies and do our best to accommodate rescheduling.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-base">{f.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  );
}


