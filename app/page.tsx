import { InitializeStores } from "@/components/InitializeStores";
import { Legend } from "@/components/map/Legend";
import MapContainer from "@/components/map/MapContainer";
import VisaTags from "@/components/map/VisaTags";
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

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  // todo - check why this takes so long to load
  const countriesWithVisaRequirements = await fetch(
    `${protocol}://${host}/api/countries`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  ).then((res) => res.json());

  return (
    <div className="container mx-auto px-4 py-12 gap-4 grid">
      <InitializeStores countries={countriesWithVisaRequirements.countries} />
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Visa Requirements Visualization</CardTitle>
          <CardDescription>
            Hover to see requirements for each country. Click on a country to
            access links in the tooltip. Click outside the tooltip to close it.
          </CardDescription>
          <VisaTags className="mt-4" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-full w-full">
            <MapContainer
              geographies={geographies}
              countriesWithVisaRequirements={
                countriesWithVisaRequirements.countries
              }
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
