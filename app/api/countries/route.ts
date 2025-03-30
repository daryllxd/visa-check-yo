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
    {
      id: "at",
      name: "Austria",
      visaRequirement: "visa-required",
    },
    {
      id: "az",
      name: "Azerbaijan",
      visaRequirement: "evisa",
      notes:
        "Permanent Residents of Canada and the United States do not need a visa and may stay up to 30 days.",
    },
    {
      id: "bh",
      name: "Bahrain",
      visaRequirement: "visa-on-arrival",
      allowedStay: "14 days",
      notes:
        "Filipinos with existing Saudi Iqama (valid for at least 3 months) and Saudi Exit-ReEntry visa can enter Bahrain visa-free via King Fahad Causeway Bridge.",
    },
    {
      id: "bd",
      name: "Bangladesh",
      visaRequirement: "visa-required",
    },
    {
      id: "bb",
      name: "Barbados",
      visaRequirement: "visa-not-required",
      allowedStay: "4 months",
    },
    {
      id: "be",
      name: "Belgium",
      visaRequirement: "visa-required",
    },
    {
      id: "bz",
      name: "Belize",
      visaRequirement: "visa-required",
      notes:
        "Individuals with valid U.S. or Schengen Treaty Visas in their passports, as well as individuals with valid U.S. and Canada residency, do not require a visa to travel to Belize.",
    },
    {
      id: "bj",
      name: "Benin",
      visaRequirement: "evisa",
      allowedStay: "30 days",
      notes: "Must have an international vaccination certificate.",
    },
    {
      id: "bt",
      name: "Bhutan",
      visaRequirement: "evisa",
    },
    {
      id: "bo",
      name: "Bolivia",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "ba",
      name: "Bosnia and Herzegovina",
      visaRequirement: "visa-required",
      notes:
        "Visa-free for up to 30 days for valid UK or Schengen visa holders.",
    },
    {
      id: "bw",
      name: "Botswana",
      visaRequirement: "evisa",
      allowedStay: "3 months",
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
      id: "bg",
      name: "Bulgaria",
      visaRequirement: "visa-required",
    },
    {
      id: "bf",
      name: "Burkina Faso",
      visaRequirement: "evisa",
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
      id: "ca",
      name: "Canada",
      visaRequirement: "visa-required",
      notes:
        "Filipinos who have held a Canadian visa in the last 10 years or who hold a valid U.S. non-immigrant visa can obtain an eTA instead of a visa when traveling to Canada by air.",
    },
    {
      id: "cl",
      name: "Chile",
      visaRequirement: "visa-required",
    },
    {
      id: "cn",
      name: "China",
      visaRequirement: "visa-required",
      notes:
        "Visa-free access to Hainan and a 24-hour visa-free transit through any international airports.",
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
      id: "cr",
      name: "Costa Rica",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
      notes: "30 days upon arrival, can extend for total of 90 days.",
    },
    {
      id: "hr",
      name: "Croatia",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "cu",
      name: "Cuba",
      visaRequirement: "visa-required",
      notes:
        "Travel allowed with a tourist card and a valid visa or permanent residence permit issued by Canada, the U.S., or an EU member state.",
    },
    {
      id: "cz",
      name: "Czech Republic",
      visaRequirement: "visa-required",
    },
    {
      id: "dk",
      name: "Denmark",
      visaRequirement: "visa-required",
    },
    {
      id: "do",
      name: "Dominican Republic",
      visaRequirement: "visa-required",
      notes:
        "Residents of the U.S., Canada, and the EU (including the UK) do not need a visa for up to 30 days with a valid passport.",
    },
    {
      id: "ec",
      name: "Ecuador",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "eg",
      name: "Egypt",
      visaRequirement: "evisa",
    },
    {
      id: "sv",
      name: "El Salvador",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "fj",
      name: "Fiji",
      visaRequirement: "visa-not-required",
      allowedStay: "4 months",
    },
    {
      id: "fi",
      name: "Finland",
      visaRequirement: "visa-required",
    },
    {
      id: "fr",
      name: "France",
      visaRequirement: "visa-required",
    },
    {
      id: "de",
      name: "Germany",
      visaRequirement: "visa-required",
    },
    {
      id: "gr",
      name: "Greece",
      visaRequirement: "visa-required",
    },
    {
      id: "gt",
      name: "Guatemala",
      visaRequirement: "visa-not-required",
    },
    {
      id: "hn",
      name: "Honduras",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "in",
      name: "India",
      visaRequirement: "evisa",
      allowedStay: "60 days",
    },
    {
      id: "id",
      name: "Indonesia",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "il",
      name: "Israel",
      visaRequirement: "visa-not-required",
      allowedStay: "3 months",
    },
    {
      id: "it",
      name: "Italy",
      visaRequirement: "visa-required",
    },
    {
      id: "jp",
      name: "Japan",
      visaRequirement: "visa-required",
    },
    {
      id: "ke",
      name: "Kenya",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "my",
      name: "Malaysia",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "mx",
      name: "Mexico",
      visaRequirement: "visa-required",
      notes:
        "Filipinos with a valid multiple-entry visa issued by the Schengen countries, Canada, Japan, the UK, or the U.S. can travel visa-free.",
    },
    {
      id: "mn",
      name: "Mongolia",
      visaRequirement: "visa-not-required",
      allowedStay: "21 days",
    },
    {
      id: "ma",
      name: "Morocco",
      visaRequirement: "visa-required",
    },
    {
      id: "mm",
      name: "Myanmar",
      visaRequirement: "visa-required",
      notes:
        "eVisa available for 28 days. Travelers must arrive via Yangon, Nay Pyi Taw, or Mandalay airports.",
    },
    {
      id: "np",
      name: "Nepal",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "nl",
      name: "Netherlands",
      visaRequirement: "visa-required",
    },
    {
      id: "ni",
      name: "Nicaragua",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "ne",
      name: "Niger",
      visaRequirement: "visa-required",
    },
    {
      id: "ng",
      name: "Nigeria",
      visaRequirement: "visa-required",
    },
    {
      id: "no",
      name: "Norway",
      visaRequirement: "visa-required",
    },
    {
      id: "om",
      name: "Oman",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "pk",
      name: "Pakistan",
      visaRequirement: "visa-required",
    },
    {
      id: "pa",
      name: "Panama",
      visaRequirement: "visa-not-required",
      allowedStay: "180 days",
    },
    {
      id: "pg",
      name: "Papua New Guinea",
      visaRequirement: "visa-required",
    },
    {
      id: "py",
      name: "Paraguay",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "pe",
      name: "Peru",
      visaRequirement: "visa-not-required",
      allowedStay: "183 days",
    },
    {
      id: "ph",
      name: "Philippines",
      visaRequirement: "own-country",
      notes: "Home country.",
    },
    {
      id: "pl",
      name: "Poland",
      visaRequirement: "visa-required",
    },
    {
      id: "pt",
      name: "Portugal",
      visaRequirement: "visa-required",
    },
    {
      id: "qa",
      name: "Qatar",
      visaRequirement: "evisa",
    },
    {
      id: "ro",
      name: "Romania",
      visaRequirement: "visa-required",
    },
    {
      id: "ru",
      name: "Russia",
      visaRequirement: "visa-required",
    },
    {
      id: "rw",
      name: "Rwanda",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "sa",
      name: "Saudi Arabia",
      visaRequirement: "visa-required",
    },
    {
      id: "sn",
      name: "Senegal",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "rs",
      name: "Serbia",
      visaRequirement: "visa-required",
    },
    {
      id: "sc",
      name: "Seychelles",
      visaRequirement: "visa-not-required",
      allowedStay: "3 months",
    },
    {
      id: "sg",
      name: "Singapore",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "sk",
      name: "Slovakia",
      visaRequirement: "visa-required",
    },
    {
      id: "si",
      name: "Slovenia",
      visaRequirement: "visa-required",
    },
    {
      id: "so",
      name: "Somalia",
      visaRequirement: "visa-required",
    },
    {
      id: "za",
      name: "South Africa",
      visaRequirement: "visa-required",
    },
    {
      id: "kr",
      name: "South Korea",
      visaRequirement: "visa-required",
      notes:
        "Visa-free transit (up to 30 days) for travelers holding valid U.S., Canada, Australia, or New Zealand visas. Visa-free for 30 days to Jeju Island.",
    },
    {
      id: "es",
      name: "Spain",
      visaRequirement: "visa-required",
    },
    {
      id: "lk",
      name: "Sri Lanka",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "sd",
      name: "Sudan",
      visaRequirement: "visa-required",
    },
    {
      id: "se",
      name: "Sweden",
      visaRequirement: "visa-required",
    },
    {
      id: "ch",
      name: "Switzerland",
      visaRequirement: "visa-required",
    },
    {
      id: "sy",
      name: "Syria",
      visaRequirement: "visa-required",
    },
    {
      id: "tw",
      name: "Taiwan",
      visaRequirement: "visa-required",
    },
    {
      id: "tz",
      name: "Tanzania",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "th",
      name: "Thailand",
      visaRequirement: "visa-not-required",
      allowedStay: "30 days",
    },
    {
      id: "tr",
      name: "Turkey",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "ug",
      name: "Uganda",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "ua",
      name: "Ukraine",
      visaRequirement: "visa-required",
    },
    {
      id: "ae",
      name: "United Arab Emirates",
      visaRequirement: "visa-required",
    },
    {
      id: "gb",
      name: "United Kingdom",
      visaRequirement: "visa-required",
    },
    {
      id: "us",
      name: "United States",
      visaRequirement: "visa-required",
    },
    {
      id: "uy",
      name: "Uruguay",
      visaRequirement: "visa-not-required",
      allowedStay: "90 days",
    },
    {
      id: "uz",
      name: "Uzbekistan",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "ve",
      name: "Venezuela",
      visaRequirement: "visa-required",
    },
    {
      id: "vn",
      name: "Vietnam",
      visaRequirement: "evisa",
      allowedStay: "30 days",
    },
    {
      id: "ye",
      name: "Yemen",
      visaRequirement: "visa-required",
    },
    {
      id: "zm",
      name: "Zambia",
      visaRequirement: "evisa",
      allowedStay: "90 days",
    },
    {
      id: "zw",
      name: "Zimbabwe",
      visaRequirement: "evisa",
      allowedStay: "3 months",
      notes:
        "Filipinos can apply for an eVisa prior to arrival for tourism purposes. The eVisa is valid for 3 months from the date of issue and allows a stay of up to 3 months.",
    },
  ];

  return NextResponse.json({ countries });
}
