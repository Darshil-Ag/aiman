import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams, Link } from "react-router-dom";

export default function Confirm() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "";
  const meet_link = searchParams.get("meet_link") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const offlineAddress = "Hospital, 123 Wellness Street";

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Confirmed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Mode: {mode?.toUpperCase()}</div>
            {mode === "online" && meet_link && (
              <div>
                Meet Link: <a className="text-primary" href={meet_link} target="_blank" rel="noreferrer">Join Google Meet</a>
              </div>
            )}
            {mode === "offline" && <div>Address: {offlineAddress}</div>}
            {mode === "online" && meet_link && (
              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(meet_link)}
                >
                  Copy Meet Link
                </Button>
                <Button asChild variant="secondary">
                  <a
                    target="_blank"
                    href={`https://wa.me/?text=${encodeURIComponent(`Appointment confirmed on ${date} ${time}. Join: ${meet_link}`)}`}
                  >
                    Share via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={`mailto:?subject=${encodeURIComponent("Appointment Confirmation")}&body=${encodeURIComponent(`Appointment confirmed on ${date} ${time}.\nJoin Google Meet: ${meet_link}`)}`}
                  >
                    Send Email
                  </a>
                </Button>
              </div>
            )}
            <div className="pt-4">
              <Button asChild>
                <Link to="/">Go to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}


