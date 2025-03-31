"use client";

import { Tag } from "@/components/ui/tag";
import { useState } from "react";

const defaultVisaOptions: { id: string; label: string; selected: boolean }[] = [
  { id: "has-us-visa", label: "🇺🇸 US Visa", selected: false },
  { id: "has-us-visa-unused", label: "🇺🇸 US Visa (unused)", selected: false },
  { id: "has-uk-visa", label: "🇬🇧 UK Visa", selected: false },
  { id: "has-schengen-visa", label: "🇪🇺 Schengen Visa", selected: false },
  { id: "has-japan-visa", label: "🇯🇵 Japan Visa", selected: false },
  { id: "has-korea-visa", label: "🇰🇷 S. Korea Visa", selected: false },
  {
    id: "has-apec-card",
    label: "🇦🇺 APEC Card",
    selected: false,
  },
];

interface VisaTagsProps {
  className?: string;
}

const VisaTags = ({ className }: VisaTagsProps) => {
  const [visaOptions, setVisaOptions] =
    useState<typeof defaultVisaOptions>(defaultVisaOptions);

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      <span className="flex font-bold">I have</span>
      {visaOptions.map((visa) => (
        <Tag
          key={visa.id}
          id={visa.id}
          selected={visa.selected}
          onClick={() =>
            setVisaOptions(
              visaOptions.map((option) =>
                option.id === visa.id
                  ? { ...option, selected: !option.selected }
                  : option,
              ),
            )
          }
        >
          {visa.label}
        </Tag>
      ))}
    </div>
  );
};

export default VisaTags;
