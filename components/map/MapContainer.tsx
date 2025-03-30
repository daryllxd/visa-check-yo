"use client";

import { Country } from "@/app/api/countries/route";
import WontFix from "@/types/wontfix";
import { Legend } from "./Legend";
import MapTooltip from "./MapTooltip";
import WorldMap from "./WorldMap";

interface MapContainerProps {
  geographies: WontFix.NoNeedToCare;
  visaRequirements: Country[];
}

const MapContainer = ({ geographies, visaRequirements }: MapContainerProps) => {
  return (
    <div className="relative h-full w-full">
      <WorldMap geographies={geographies}>
        <Legend className="hidden lg:block absolute bottom-4 right-4 border border-gray-300 rounded-md p-2" />
      </WorldMap>
      <MapTooltip visaRequirements={visaRequirements} />
    </div>
  );
};

export default MapContainer;
