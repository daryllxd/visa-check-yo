import { ComponentProps } from "react";

interface LegendProps extends ComponentProps<"div"> {}

export const Legend = ({ className, ...props }: LegendProps) => {
  return (
    <div className={`bg-white p-2 rounded shadow-md ${className}`} {...props}>
      <h4 className="text-sm font-bold mb-1">Visa Requirements</h4>
      <div className="grid grid-cols-1 gap-1">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-visa-free mr-2" />
          <span className="text-xs">Visa Not Required</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-visa-on-arrival mr-2" />
          <span className="text-xs">Visa on Arrival</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-visa-e-visa mr-2" />
          <span className="text-xs">e-visa</span>
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
  );
};
