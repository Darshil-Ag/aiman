import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const fallback = {
  title: "Article",
  image: "https://source.unsplash.com/featured/?mental%20health,care",
  content: [
    "This article provides helpful, trustworthy information to support your mental health.",
    "If you have questions about your care, our team is here to help with warm, professional guidance.",
  ],
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const title = (slug || "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const image = `https://source.unsplash.com/featured/?${encodeURIComponent(title + ',mental health')}`;

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-3xl">
        <div className="w-full aspect-[16/6] overflow-hidden rounded-lg bg-muted">
          <img src={image || fallback.image} alt={title || fallback.title} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mt-6">{title || fallback.title}</h1>
        <div className="space-y-4 text-muted-foreground mt-4">
          {(fallback.content).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link to="/resources">Back to Resources</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}


