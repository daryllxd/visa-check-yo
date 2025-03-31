import { Country } from "@/app/api/countries/route";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import the stylesheet (for versions prior to 5.13.0)

interface MapTooltipProps {
  visaRequirements: Country[];
  isCountryClicked: boolean;
  setIsCountryClicked: (isCountryClicked: boolean) => void;
}

const MapTooltip = ({
  visaRequirements,
  isCountryClicked,
  setIsCountryClicked,
}: MapTooltipProps) => {
  return (
    <>
      <ReactTooltip
        id="map-tooltip"
        place="top"
        className="z-50 max-w-xs"
        clickable
        openEvents={{
          click: true,
          mouseenter: !isCountryClicked,
        }}
        closeEvents={{
          mouseleave: !isCountryClicked,
        }}
        afterHide={() => {
          setIsCountryClicked(false);
        }}
        render={({ content }) => {
          // Find country details based on tooltip content
          const country = visaRequirements.find(
            (country) => country.name === content,
          );

          if (!country) return content;

          return (
            <div className="p-2">
              <div className="font-semibold">{country.name}</div>
              <div className="text-2xl text-visa-required">
                Status: {country.visaRequirement.replace(/-/g, " ")}
              </div>
              <Link href={"/about"}>About page</Link>
              {country.allowedStay && <div>Stay: {country.allowedStay}</div>}
              {country.notes && (
                <div className="mt-1 text-xs opacity-80">{country.notes}</div>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default MapTooltip;
