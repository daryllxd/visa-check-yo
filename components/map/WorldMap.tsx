"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// @todo: use the geoUrl from the api - https://github.com/zcreativelabs/react-simple-maps/pull/350
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Sample data - mapping country code to visa status
const countryStatus = {
  USA: "visa-required",
  CAN: "visa-free",
  GBR: "visa-on-arrival",
  FRA: "visa-free",
  JPN: "e-visa",
  AUS: "visa-required",
  // Add more countries as needed
};

const getStatusColor = (status) => {
  switch (status) {
    case "visa-free":
      return "#34D399"; // green
    case "visa-on-arrival":
      return "#FBBF24"; // yellow
    case "e-visa":
      return "#60A5FA"; // blue
    case "visa-required":
      return "#F87171"; // red
    default:
      return "#94A3B8"; // gray
  }
};

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="relative h-full w-full">
      {tooltipContent && (
        <div
          className="absolute z-10 rounded bg-black/80 px-2 py-1 text-xs text-white"
          style={{
            left: `${tooltipContent.x}px`,
            top: `${tooltipContent.y}px`,
          }}
        >
          {tooltipContent.content}
        </div>
      )}

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 200,
        }}
        width={980}
        height={580}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const status = countryStatus[geo.id] || "unknown";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getStatusColor(status)}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#CBD5E1" },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={(evt) => {
                      const { pageX, pageY } = evt;
                      setTooltipContent({
                        x: pageX,
                        y: pageY - 40,
                        content: `${geo.properties.name} (${status.replace("-", " ")})`,
                      });
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
