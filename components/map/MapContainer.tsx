"use client";

import { useCountryStore } from "@/lib/stores/useCountryStore";
import WontFix from "@/types/wontfix";
import { useState } from "react";
import { Legend } from "./Legend";
import MapTooltip from "./MapTooltip";
import WorldMap from "./WorldMap";

interface MapContainerProps {
  geographies: WontFix.NoNeedToCare;
}

const MapContainer = ({ geographies }: MapContainerProps) => {
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const { enhancedCountries } = useCountryStore();

  return (
    <div className="relative h-full w-full">
      <WorldMap
        geographies={geographies}
        visaRequirements={enhancedCountries}
        isCountryClicked={isCountryClicked}
        setIsCountryClicked={setIsCountryClicked}
      >
        <Legend className="hidden lg:block absolute bottom-4 right-4 border border-gray-300 rounded-md p-2" />
      </WorldMap>
      <MapTooltip
        visaRequirements={enhancedCountries}
        isCountryClicked={isCountryClicked}
        setIsCountryClicked={setIsCountryClicked}
      />
    </div>
  );
};

export default MapContainer;
