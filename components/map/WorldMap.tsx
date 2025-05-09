"use client";

import { Country } from "@/app/api/countries/route";
import { cn } from "@/lib/utils";
import WontFix from "@/types/wontfix";
import { ComponentProps, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// Sample data - mapping country code to visa status
const getStatusColor = (status: string, country: string) => {
  switch (status) {
    case "visa-free":
      return "fill-visa-free";
    case "visa-on-arrival":
      return "fill-visa-on-arrival";
    case "e-visa":
      return "fill-visa-e-visa";
    case "visa-required":
      return "fill-visa-required";
    case "own-country":
      return "fill-visa-own";
    default:
      console.log(country);
      return "rgb(var(--color-visa-unknown))";
  }
};

interface WorldMapProps extends ComponentProps<"div"> {
  geographies: WontFix.NoNeedToCare;
  visaRequirements?: Country[];
  isCountryClicked: boolean;
  setIsCountryClicked: (isCountryClicked: boolean) => void;
}

const WorldMap = ({
  geographies,
  visaRequirements,
  isCountryClicked,
  setIsCountryClicked,
  ...props
}: WorldMapProps) => {
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
              geographies.map((geo: WontFix.NoNeedToCare) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    className={cn(
                      getStatusColor(
                        visaRequirements?.find(
                          (c) => c.name === geo.properties.name,
                        )?.visaRequirement || "unknown",
                        geo.properties.name,
                      ),
                    )}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                        shadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                      },
                      pressed: { outline: "none" },
                    }}
                    data-tooltip-id="map-tooltip"
                    data-tooltip-float={!isCountryClicked}
                    data-tooltip-content={geo.properties.name}
                    onClick={() => {
                      setIsCountryClicked(true);
                    }}
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
