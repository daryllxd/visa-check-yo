import { NextResponse } from "next/server";

// Define types for visa requirements
export type VisaRequirementType =
  | "visa-required"
  | "visa-not-required"
  | "evisa"
  | "visa-on-arrival"
  | "own-country";

// Define the country interface
export interface Country {
  id: string;
  name: string;
  visaRequirement: VisaRequirementType;
  allowedStay?: string;
  notes?: string;
}

export async function GET(): Promise<NextResponse<{ countries: Country[] }>> {
  // Sample data based on the provided markdown table
  const countries: Country[] = [
    {
      id: "ph",
      name: "Philippines",
      visaRequirement: "own-country",
      notes: "Home country",
    },
    {
      id: "af",
      name: "Afghanistan",
      visaRequirement: "visa-required",
      notes:
        "Women of all nationalities must cover their body with clothing, except for their face, hands, and feet.",
    },
    {
      id: "al",
      name: "Albania",
      visaRequirement: "evisa",
      notes:
        "Philippine passport holders with a valid, multiple-entry Schengen, U.S., or UK visa (previously used in the respective country) or valid residence permit in these areas can enter visa-free.",
    },
    {
      id: "dz",
      name: "Algeria",
      visaRequirement: "visa-required",
    },
    {
      id: "ad",
      name: "Andorra",
      visaRequirement: "visa-required",
      notes:
        "No visa requirements for entry into Andorra, but access is through France or Spain. A multiple-entry visa is required to re-enter either France or Spain when leaving Andorra. All visitors can stay for 3 months.",
    },
    {
      id: "ao",
      name: "Angola",
      visaRequirement: "visa-required",
    },
    {
      id: "ag",
      name: "Antigua and Barbuda",
      visaRequirement: "evisa",
      notes:
        "Visa on arrival for Filipinos with valid visa or resident card from Canada, the United Kingdom, the United States, or a Schengen visa.",
    },
    {
      id: "ar",
      name: "Argentina",
      visaRequirement: "visa-required",
      notes:
        "Those with valid B2 or B1/B2 visa issued by the U.S. are eligible to apply for Electronic Travel Authorization (eTA) prior to arrival.",
    },
    {
      id: "am",
      name: "Armenia",
      visaRequirement: "evisa",
      allowedStay: "120 days",
      notes:
        "Visa on arrival for holders of valid sticker visa or resident card issued by Australia, Canada, GCC countries, Japan, New Zealand, Russia, South Korea, EU or Schengen Area member states, UK, or the US.",
    },
    {
      id: "au",
      name: "Australia",
      visaRequirement: "visa-required",
      notes:
        "May apply online (Online Visitor e600 visa). Transit visa is not required.",
    },
    // Add more countries as per the Markdown table
    {
      id: "bb",
      name: "Barbados",
      visaRequirement: "visa-not-required",
      allowedStay: "4 months",
    },
    {
      id: "bo",
      name: "Bolivia",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "br",
      name: "Brazil",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "bn",
      name: "Brunei",
      visaRequirement: "visa-not-required",
      allowedStay: "14 days",
    },
    {
      id: "bi",
      name: "Burundi",
      visaRequirement: "visa-on-arrival",
      allowedStay: "1 month",
    },
    {
      id: "kh",
      name: "Cambodia",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "co",
      name: "Colombia",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
      notes:
        "90 days on arrival, can extend another 90 days for 180 days total.",
    },
    {
      id: "th",
      name: "Thailand",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "us",
      name: "United States",
      visaRequirement: "visa-required",
    },
    {
      id: "gb",
      name: "United Kingdom",
      visaRequirement: "visa-required",
    },
    {
      id: "jp",
      name: "Japan",
      visaRequirement: "visa-required",
    },
  ];

  return NextResponse.json({ countries });
}
