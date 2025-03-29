import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

// Import WorldMap with SSR disabled
const WorldMap = dynamic(() => import("@/components/map/WorldMap"), {
  loading: () => (
    <div className="flex h-[500px] w-full items-center justify-center">
      <p className="text-muted-foreground">Loading map visualization...</p>
    </div>
  ),
});

export default async function MapPage() {
  const geographies = await fetch(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json",
  ).then((res) => res.json());

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Interactive World Map
      </h1>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Visa Requirements Visualization</CardTitle>
          <CardDescription>
            Explore visa requirements and travel possibilities around the world
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[600px] w-full">
            <WorldMap geographies={geographies} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
