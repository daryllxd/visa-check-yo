import { Country } from "@/app/api/countries/route";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import the stylesheet (for versions prior to 5.13.0)

interface MapTooltipProps {
  visaRequirements: Country[];
}

const MapTooltip = ({ visaRequirements }: MapTooltipProps) => {
  return (
    <Tooltip
      id="map-tooltip"
      place="top"
      className="z-50 max-w-xs"
      render={({ content }) => {
        // Find country details based on tooltip content
        const country = visaRequirements.find(
          (country) => country.name === content,
        );

        if (!country) return content;

        return (
          <div className="p-2">
            <div className="font-semibold">{country.name}</div>
            <div>Status: {country.visaRequirement.replace(/-/g, " ")}</div>
            {country.allowedStay && <div>Stay: {country.allowedStay}</div>}
            {country.notes && (
              <div className="mt-1 text-xs opacity-80">{country.notes}</div>
            )}
          </div>
        );
      }}
    />
  );
};

export default MapTooltip;
