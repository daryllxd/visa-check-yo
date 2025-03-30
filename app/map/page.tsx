import { Legend } from "@/components/map/Legend";
import MapContainer from "@/components/map/MapContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { headers } from "next/headers";

export default async function MapPage() {
  const geographies = await fetch(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json",
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  ).then((res) => res.json());

  const host = await headers().then((headers) => headers.get("host"));
  const protocol = process.env.HTTPS === "true" ? "https" : "https";

  const start = Date.now();

  // todo - check why this takes so long to load
  const visaRequirements = await fetch(`${protocol}://${host}/api/countries`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  }).then((res) => res.json());

  return (
    <div className="container mx-auto px-4 py-12 gap-4 grid">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Visa Requirements Visualization</CardTitle>
          <CardDescription>
            Explore visa requirements and travel possibilities around the world
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-full w-full">
            <MapContainer
              geographies={geographies}
              visaRequirements={visaRequirements.countries}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="lg:hidden">
        <CardContent>
          <Legend />
        </CardContent>
      </Card>
    </div>
  );
}
