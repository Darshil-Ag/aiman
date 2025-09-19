import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2">OUR SERVICES</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Expert Mental Health Care</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Explore our comprehensive services. Click a service to learn more and see conditions we treat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.slug} to={`/services/${svc.slug}`}>
              <Card className="h-full hover:shadow-lg transition">
                <CardHeader>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md bg-muted">
                    <img src={svc.image} alt={svc.name} className="w-full h-full object-cover" />
                    {svc.nowOpen && (
                      <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded bg-green-600 text-white">Now Open</span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <svc.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{svc.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{svc.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/book">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
