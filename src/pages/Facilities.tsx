import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Facilities() {
  const features = [
    { title: "Modern Consultation Rooms", desc: "Comfortable, private spaces for therapy and consultations." },
    { title: "24/7 Support Desk", desc: "Round-the-clock assistance for urgent needs and scheduling." },
    { title: "Online Telehealth", desc: "Secure virtual care via Google Meet for remote sessions." },
    { title: "Specialized Clinics", desc: "Child therapy, stress management, couples counseling, and more." },
  ];

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Our Facilities</h1>
          <p className="text-muted-foreground">Designed to promote healing and peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}







