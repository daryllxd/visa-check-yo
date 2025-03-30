"use client";

import WontFix from "@/types/wontfix";
import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

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
      return "rgb(var(--color-visa-free))"; // Using CSS variable for Tailwind color
    case "visa-on-arrival":
      return "rgb(var(--color-visa-arrival))";
    case "e-visa":
      return "rgb(var(--color-visa-evisa))";
    case "visa-required":
      return "rgb(var(--color-visa-required))";
    case "own-country":
      return "rgb(var(--color-visa-own))";
    default:
      return "rgb(var(--color-visa-unknown))";
  }
};

const WorldMap = ({ geographies }: { geographies: WontFix.NoNeedToCare }) => {
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
            <div className="w-4 h-4 bg-visa-free mr-2" />
            <span className="text-xs">Visa Not Required</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-visa-arrival mr-2" />
            <span className="text-xs">Visa on Arrival</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-visa-evisa mr-2" />
            <span className="text-xs">eVisa</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-visa-required mr-2" />
            <span className="text-xs">Visa Required</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-visa-own mr-2" />
            <span className="text-xs">Home Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WorldMap);
