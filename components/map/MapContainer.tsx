"use client";

import { Country } from "@/app/api/countries/route";
import WontFix from "@/types/wontfix";
import MapTooltip from "./MapTooltip";
import WorldMap from "./WorldMap";

interface MapContainerProps {
  geographies: WontFix.NoNeedToCare;
  visaRequirements: Country[];
}

const MapContainer = ({ geographies, visaRequirements }: MapContainerProps) => {
  return (
    <div className="relative h-full w-full">
      <WorldMap geographies={geographies} />
      <MapTooltip visaRequirements={visaRequirements} />
    </div>
  );
};

export default MapContainer;
