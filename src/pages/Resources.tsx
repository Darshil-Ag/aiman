import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const articles: Article[] = [
  { slug: "understanding-depression", title: "Understanding Depression", description: "A simple guide to symptoms and support.", image: "https://source.unsplash.com/featured/?mental%20health,care" },
  { slug: "managing-anxiety", title: "Managing Anxiety", description: "Practical ways to find calm and balance.", image: "https://source.unsplash.com/featured/?calm,relaxation" },
  { slug: "better-sleep", title: "Better Sleep Habits", description: "Gentle steps for more restful nights.", image: "https://source.unsplash.com/featured/?sleep,night" },
  { slug: "supporting-a-loved-one", title: "Supporting a Loved One", description: "How to be present with care and respect.", image: "https://source.unsplash.com/featured/?support,care" },
];

export default function Resources() {
  return (
    <Layout>
      <div className="container px-4 py-10 max-w-6xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-2">Knowledge Library</Badge>
          <h1 className="text-3xl font-bold">Helpful Articles</h1>
          <p className="text-muted-foreground mt-2">Evidence-based, patient-friendly information to support your journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(a => (
            <Link key={a.slug} to={`/resources/${a.slug}`}>
              <Card className="hover:shadow-md transition h-full">
                <CardHeader>
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-md bg-muted">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{a.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}


