"use client";

import WontFix from "@/types/wontfix";
import { ComponentProps, memo } from "react";
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

interface WorldMapProps extends ComponentProps<"div"> {
  geographies: WontFix.NoNeedToCare;
}

const WorldMap = ({ geographies, ...props }: WorldMapProps) => {
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
      {props.children}
    </div>
  );
};

export default memo(WorldMap);
