"use client";

import { Country } from "@/app/api/countries/route";
import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
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

const getStatusColor = (status: string) => {
  switch (countryStatus[status]) {
    case "visa-free":
      return "#34D399"; // green
    case "visa-on-arrival":
      return "#FBBF24"; // yellow
    case "e-visa":
      return "#60A5FA"; // blue
    case "visa-required":
      return "#F87171"; // red
    case "own-country":
      return "#60A5FA"; // blue
    default:
      return "#94A3B8"; // gray
  }
};

const WorldMap = ({
  geographies,
  visaRequirements,
  setTooltipContent,
}: {
  geographies: WontFix.NoNeedToCare;
  visaRequirements: Country[];
  setTooltipContent: (
    content: { x: number; y: number; content: string } | null,
  ) => void;
}) => {
  return (
    <div className="relative h-full w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 200,
        }}
        width={980}
        height={580}
      >
        <ZoomableGroup>
          <Geographies geography={geographies}>
            {({ geographies }: { geographies: WontFix.NoNeedToCare }) =>
              geographies.map((geo: any) => {
                const status = countryStatus[geo.id] || "unknown";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getStatusColor(status)}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                        fill: getStatusColor(geo.properties.name),
                      },
                      hover: { outline: "none", fill: "#CBD5E1" },
                      pressed: { outline: "none" },
                    }}
                    data-tooltip-id="map-tooltip"
                    data-tooltip-content={geo.properties.name}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {/* Add a Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md">
        <h4 className="text-sm font-bold mb-1">Visa Requirements</h4>
        <div className="grid grid-cols-1 gap-1">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#34D399] mr-2"></div>
            <span className="text-xs">Visa Not Required</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#FBBF24] mr-2"></div>
            <span className="text-xs">Visa on Arrival</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#60A5FA] mr-2"></div>
            <span className="text-xs">eVisa</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#F87171] mr-2"></div>
            <span className="text-xs">Visa Required</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#8B5CF6] mr-2"></div>
            <span className="text-xs">Home Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WorldMap);
