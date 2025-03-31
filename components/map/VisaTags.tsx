"use client";

import { Tag } from "@/components/ui/tag";
import { useCountryStore } from "@/lib/stores/useCountryStore";
import { useVisaStore } from "@/lib/stores/useVisaStore";
import { useEffect } from "react";

interface VisaTagsProps {
  className?: string;
}

const VisaTags = ({ className }: VisaTagsProps) => {
  const { visaOptions, toggleVisa } = useVisaStore();
  const { updateEnhancedCountries } = useCountryStore();

  // Update enhanced countries whenever visa selection changes
  useEffect(() => {
    const selectedVisaIds = visaOptions
      .filter((visa) => visa.selected)
      .map((visa) => visa.id);

    updateEnhancedCountries(selectedVisaIds);
  }, [visaOptions, updateEnhancedCountries]);

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      <span className="flex font-bold">I have</span>
      {visaOptions.map((visa) => (
        <Tag
          key={visa.id}
          id={visa.id}
          selected={visa.selected}
          onClick={() => toggleVisa(visa.id)}
        >
          {visa.label}
        </Tag>
      ))}
    </div>
  );
};

export default VisaTags;
