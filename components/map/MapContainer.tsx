"use client";

import { Country } from "@/app/api/countries/route";
import WorldMap from "./WorldMap";
import MapTooltip from "./MapTooltip";
import WontFix from "@/types/wontfix";

// Sample data - mapping country code to visa status
const countryStatus: Record<string, string> = {
  "United States of America": "visa-required",
  Canada: "visa-free",
  GBR: "visa-on-arrival",
  FRA: "visa-free",
  JPN: "e-visa",
  AUS: "visa-required",
  Philippines: "own-country",
  // Add more countries as needed
};

interface MapContainerProps {
  geographies: WontFix.NoNeedToCare;
  visaRequirements: Country[];
}

const MapContainer = ({ geographies, visaRequirements }: MapContainerProps) => {
  return (
    <div className="relative h-full w-full">
      <WorldMap geographies={geographies} visaRequirements={visaRequirements} />
      <MapTooltip visaRequirements={visaRequirements} />
    </div>
  );
};

export default MapContainer;
