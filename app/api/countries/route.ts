import { NextResponse } from "next/server";

// Define types for visa requirements
export type VisaRequirementType =
  | "visa-required"
  | "visa-free"
  | "e-visa"
  | "visa-on-arrival"
  | "own-country";

// Define the country interface
export interface Country {
  id: string;
  name: string;
  visaRequirement: VisaRequirementType;
  allowedStay?: string;
  notes?: string;
  tags?: string[];
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
      tags: [],
    },
    {
      id: "al",
      name: "Albania",
      visaRequirement: "e-visa",
      notes:
        "Philippine passport holders with a valid, multiple-entry Schengen, U.S., or UK visa (previously used in the respective country) or valid residence permit in these areas can enter visa-free.",
      tags: ["has-us-visa"],
    },
    {
      id: "dz",
      name: "Algeria",
      visaRequirement: "visa-required",
      tags: [],
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
      visaRequirement: "e-visa",
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
      visaRequirement: "e-visa",
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "az",
      name: "Azerbaijan",
      visaRequirement: "e-visa",
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
      visaRequirement: "visa-free",
      allowedStay: "4 months",
    },
    {
      id: "be",
      name: "Belgium",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "bz",
      name: "Belize",
      visaRequirement: "visa-required",
      notes:
        "Individuals with valid U.S. or Schengen Treaty Visas in their passports, as well as individuals with valid U.S. and Canada residency, do not require a visa to travel to Belize.",
      tags: ["has-us-visa"],
    },
    {
      id: "bj",
      name: "Benin",
      visaRequirement: "e-visa",
      allowedStay: "30 days",
      notes: "Must have an international vaccination certificate.",
    },
    {
      id: "bt",
      name: "Bhutan",
      visaRequirement: "e-visa",
    },
    {
      id: "bo",
      name: "Bolivia",
      visaRequirement: "visa-free",
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
      visaRequirement: "e-visa",
      allowedStay: "3 months",
    },
    {
      id: "br",
      name: "Brazil",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "bn",
      name: "Brunei",
      visaRequirement: "visa-free",
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
      visaRequirement: "e-visa",
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
      visaRequirement: "visa-free",
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
        "Filipino citizens may travel without a visa to Hainan. - Visa on arrival for Shenzhen, provided that they have a previously issued Chinese visa, whether valid or expired. - 24-hour visa-free transit through any international airports of China, allows domestic travel through different airports.",
    },
    {
      id: "co",
      name: "Colombia",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
      notes:
        "90 days on arrival, can extend another 90 days for 180 days total.",
    },
    {
      id: "cr",
      name: "Costa Rica",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
      notes: "30 days upon arrival, can extend for total of 90 days.",
    },
    {
      id: "hr",
      name: "Croatia",
      visaRequirement: "visa-free",
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "dk",
      name: "Denmark",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "do",
      name: "Dominican Republic",
      visaRequirement: "visa-required",
      notes:
        "Residents of the U.S., Canada, and the EU (including the UK) do not need a visa for up to 30 days with a valid passport.",
      tags: ["has-us-visa"],
    },
    {
      id: "ec",
      name: "Ecuador",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "eg",
      name: "Egypt",
      visaRequirement: "e-visa",
    },
    {
      id: "sv",
      name: "El Salvador",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "fj",
      name: "Fiji",
      visaRequirement: "visa-free",
      allowedStay: "4 months",
    },
    {
      id: "fi",
      name: "Finland",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "fr",
      name: "France",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "de",
      name: "Germany",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "gr",
      name: "Greece",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "gt",
      name: "Guatemala",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "hn",
      name: "Honduras",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "in",
      name: "India",
      visaRequirement: "e-visa",
      allowedStay: "60 days",
    },
    {
      id: "id",
      name: "Indonesia",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "ir",
      name: "Iran",
      visaRequirement: "e-visa",
    },
    {
      id: "il",
      name: "Israel",
      visaRequirement: "visa-free",
      allowedStay: "3 months",
    },
    {
      id: "it",
      name: "Italy",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
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
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "mx",
      name: "Mexico",
      visaRequirement: "visa-required",
      notes:
        "Filipinos with a valid multiple-entry visa issued by the Schengen countries, Canada, Japan, the UK, or the U.S. can travel visa-free.",
      tags: ["has-us-visa"],
    },
    {
      id: "mn",
      name: "Mongolia",
      visaRequirement: "visa-free",
      allowedStay: "21 days",
    },
    {
      id: "ma",
      name: "Morocco",
      visaRequirement: "visa-free",
    },
    {
      id: "mm",
      name: "Myanmar",
      visaRequirement: "visa-free",
      allowedStay: "14 days",
      notes:
        "e-visa available for 28 days. Travelers must arrive via Yangon, Nay Pyi Taw, or Mandalay airports.",
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "ni",
      name: "Nicaragua",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
      tags: ["has-us-visa"],
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "om",
      name: "Oman",
      visaRequirement: "e-visa",
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
      visaRequirement: "visa-free",
      allowedStay: "180 days",
      tags: ["has-us-visa"],
    },
    {
      id: "pg",
      name: "Papua New Guinea",
      visaRequirement: "visa-required",
    },
    {
      id: "py",
      name: "Paraguay",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "pe",
      name: "Peru",
      visaRequirement: "visa-free",
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "pt",
      name: "Portugal",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "qa",
      name: "Qatar",
      visaRequirement: "e-visa",
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
      visaRequirement: "e-visa",
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
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "rs",
      name: "Serbia",
      visaRequirement: "visa-required",
      tags: ["has-us-visa"],
    },
    {
      id: "sc",
      name: "Seychelles",
      visaRequirement: "visa-free",
      allowedStay: "3 months",
    },
    {
      id: "sg",
      name: "Singapore",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "sk",
      name: "Slovakia",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "si",
      name: "Slovenia",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "lk",
      name: "Sri Lanka",
      visaRequirement: "e-visa",
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
      tags: ["has-schengen-visa"],
    },
    {
      id: "ch",
      name: "Switzerland",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
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
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "tr",
      name: "Turkey",
      visaRequirement: "e-visa",
      allowedStay: "30 days",
      tags: ["has-us-visa", "has-schengen-visa"],
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
      tags: ["has-us-visa"],
    },
    {
      id: "uy",
      name: "Uruguay",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "uz",
      name: "Uzbekistan",
      visaRequirement: "e-visa",
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
      visaRequirement: "visa-free",
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
      visaRequirement: "e-visa",
      allowedStay: "90 days",
    },
    {
      id: "zw",
      name: "Zimbabwe",
      visaRequirement: "e-visa",
      allowedStay: "3 months",
      notes:
        "Filipinos can apply for an e-visa prior to arrival for tourism purposes. The e-visa is valid for 3 months from the date of issue and allows a stay of up to 3 months.",
    },
    {
      id: "cm",
      name: "Cameroon",
      visaRequirement: "visa-required",
    },
    {
      id: "td",
      name: "Chad",
      visaRequirement: "visa-required",
    },
    {
      id: "cg",
      name: "Congo",
      visaRequirement: "visa-required",
    },
    {
      id: "gy",
      name: "Guyana",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "ht",
      name: "Haiti",
      visaRequirement: "visa-free",
      allowedStay: "3 months",
    },
    {
      id: "iq",
      name: "Iraq",
      visaRequirement: "visa-required",
    },
    {
      id: "ie",
      name: "Ireland",
      visaRequirement: "visa-required",
    },
    {
      id: "jo",
      name: "Jordan",
      visaRequirement: "visa-on-arrival",
      allowedStay: "30 days",
    },
    {
      id: "kz",
      name: "Kazakhstan",
      visaRequirement: "visa-free",
    },
    {
      id: "xk",
      name: "Kosovo",
      visaRequirement: "visa-required",
    },
    {
      id: "kg",
      name: "Kyrgyzstan",
      visaRequirement: "visa-free",
      allowedStay: "60 days",
    },
    {
      id: "la",
      name: "Laos",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "lr",
      name: "Liberia",
      visaRequirement: "visa-required",
    },
    {
      id: "ly",
      name: "Libya",
      visaRequirement: "e-visa",
    },
    {
      id: "by",
      name: "Belarus",
      visaRequirement: "visa-required",
    },
    {
      id: "cy",
      name: "Cyprus",
      visaRequirement: "visa-required",
    },
    {
      id: "er",
      name: "Eritrea",
      visaRequirement: "visa-required",
    },
    {
      id: "sz",
      name: "eSwatini",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "gm",
      name: "Gambia",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "ge",
      name: "Georgia",
      visaRequirement: "visa-free",
      allowedStay: "365 days",
    },
    {
      id: "gn",
      name: "Guinea",
      visaRequirement: "visa-required",
    },
    {
      id: "gw",
      name: "Guinea-Bissau",
      visaRequirement: "visa-required",
    },
    {
      id: "mk",
      name: "Macedonia",
      visaRequirement: "visa-required",
    },
    {
      id: "ml",
      name: "Mali",
      visaRequirement: "visa-required",
    },
    {
      id: "mr",
      name: "Mauritania",
      visaRequirement: "visa-required",
    },
    {
      id: "md",
      name: "Moldova",
      visaRequirement: "visa-required",
    },
    {
      id: "me",
      name: "Montenegro",
      visaRequirement: "visa-required",
      tags: ["has-us-visa"],
    },
    {
      id: "cx",
      name: "N. Cyprus",
      visaRequirement: "visa-required",
      notes: "Entry depends on Turkish controls",
    },
    {
      id: "nc",
      name: "New Caledonia",
      visaRequirement: "visa-required",
    },
    {
      id: "kp",
      name: "North Korea",
      visaRequirement: "visa-required",
    },
    {
      id: "ps",
      name: "Palestine",
      visaRequirement: "visa-required",
      notes: "Entry depends on Israeli controls",
    },
    {
      id: "ss",
      name: "S. Sudan",
      visaRequirement: "visa-required",
    },
    {
      id: "sl",
      name: "Sierra Leone",
      visaRequirement: "visa-required",
    },
    {
      id: "sb",
      name: "Solomon Is.",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "so",
      name: "Somaliland",
      visaRequirement: "visa-on-arrival",
      allowedStay: "30 days",
    },
    {
      id: "tj",
      name: "Tajikistan",
      visaRequirement: "e-visa",
      allowedStay: "45 days",
    },
    {
      id: "tl",
      name: "Timor-Leste",
      visaRequirement: "visa-on-arrival",
      allowedStay: "30 days",
    },
    {
      id: "tg",
      name: "Togo",
      visaRequirement: "visa-required",
    },
    {
      id: "tt",
      name: "Trinidad and Tobago",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "eh",
      name: "W. Sahara",
      visaRequirement: "visa-required",
      notes: "Entry dependent on Morocco",
    },
    {
      id: "et",
      name: "Ethiopia",
      visaRequirement: "e-visa",
      allowedStay: "30 days",
    },
    {
      id: "cd",
      name: "Dem. Rep. Congo",
      visaRequirement: "visa-required",
    },
    {
      id: "ly",
      name: "Libya",
      visaRequirement: "e-visa",
    },
    {
      id: "by",
      name: "Belarus",
      visaRequirement: "visa-required",
    },
    {
      id: "cm",
      name: "Cameroon",
      visaRequirement: "e-visa",
    },
    {
      id: "td",
      name: "Chad",
      visaRequirement: "visa-required",
    },
    {
      id: "cg",
      name: "Congo",
      visaRequirement: "visa-required",
    },
    {
      id: "cy",
      name: "Cyprus",
      visaRequirement: "visa-required",
    },
    {
      id: "er",
      name: "Eritrea",
      visaRequirement: "visa-required",
    },
    {
      id: "sz",
      name: "eSwatini",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "gm",
      name: "Gambia",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "ge",
      name: "Georgia",
      visaRequirement: "visa-free",
      allowedStay: "365 days",
    },
    {
      id: "gn",
      name: "Guinea",
      visaRequirement: "visa-required",
    },
    {
      id: "gw",
      name: "Guinea-Bissau",
      visaRequirement: "visa-required",
    },
    {
      id: "gy",
      name: "Guyana",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "ht",
      name: "Haiti",
      visaRequirement: "visa-free",
      allowedStay: "3 months",
    },
    {
      id: "ie",
      name: "Ireland",
      visaRequirement: "visa-required",
    },
    {
      id: "xk",
      name: "Kosovo",
      visaRequirement: "visa-required",
    },
    {
      id: "kg",
      name: "Kyrgyzstan",
      visaRequirement: "visa-free",
      allowedStay: "60 days",
    },
    {
      id: "lr",
      name: "Liberia",
      visaRequirement: "visa-required",
    },
    {
      id: "mk",
      name: "Macedonia",
      visaRequirement: "visa-required",
    },
    {
      id: "ml",
      name: "Mali",
      visaRequirement: "visa-required",
    },
    {
      id: "mr",
      name: "Mauritania",
      visaRequirement: "visa-required",
    },
    {
      id: "md",
      name: "Moldova",
      visaRequirement: "visa-required",
    },
    {
      id: "me",
      name: "Montenegro",
      visaRequirement: "visa-required",
      tags: ["has-us-visa"],
    },
    {
      id: "cx",
      name: "N. Cyprus",
      visaRequirement: "visa-required",
      notes: "Entry depends on Turkish controls",
    },
    {
      id: "nc",
      name: "New Caledonia",
      visaRequirement: "visa-required",
    },
    {
      id: "kp",
      name: "North Korea",
      visaRequirement: "visa-required",
    },
    {
      id: "ps",
      name: "Palestine",
      visaRequirement: "visa-required",
      notes: "Entry depends on Israeli controls",
    },
    {
      id: "ss",
      name: "S. Sudan",
      visaRequirement: "visa-required",
    },
    {
      id: "us",
      name: "United States of America",
      visaRequirement: "visa-required",
    },
    {
      id: "do",
      name: "Dominican Rep.",
      visaRequirement: "visa-required",
      notes:
        "Residents of the U.S., Canada, and the EU (including the UK) do not need a visa for up to 30 days with a valid passport.",
      tags: ["has-us-visa"],
    },
    {
      id: "bs",
      name: "Bahamas",
      visaRequirement: "visa-required",
    },
    {
      id: "fk",
      name: "Falkland Is.",
      visaRequirement: "visa-required",
    },
    {
      id: "gl",
      name: "Greenland",
      visaRequirement: "visa-required",
    },
    {
      id: "tf",
      name: "Fr. S. Antarctic Lands",
      visaRequirement: "visa-required",
    },
    {
      id: "ls",
      name: "Lesotho",
      visaRequirement: "visa-free",
      allowedStay: "14 days",
    },
    {
      id: "sr",
      name: "Suriname",
      visaRequirement: "visa-required",
    },
    {
      id: "pr",
      name: "Puerto Rico",
      visaRequirement: "visa-required",
      notes: "Same requirements as the United States.",
    },
    {
      id: "jm",
      name: "Jamaica",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "na",
      name: "Namibia",
      visaRequirement: "visa-free",
      allowedStay: "90 days",
    },
    {
      id: "gh",
      name: "Ghana",
      visaRequirement: "visa-required",
    },
    {
      id: "ci",
      name: "Côte d'Ivoire",
      visaRequirement: "visa-required",
    },
    {
      id: "cf",
      name: "Central African Rep.",
      visaRequirement: "visa-required",
    },
    {
      id: "ga",
      name: "Gabon",
      visaRequirement: "visa-required",
    },
    {
      id: "gq",
      name: "Eq. Guinea",
      visaRequirement: "visa-required",
    },
    {
      id: "mw",
      name: "Malawi",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "mz",
      name: "Mozambique",
      visaRequirement: "visa-on-arrival",
      allowedStay: "30 days",
    },
    {
      id: "lb",
      name: "Lebanon",
      visaRequirement: "visa-required",
    },
    {
      id: "mg",
      name: "Madagascar",
      visaRequirement: "visa-on-arrival",
      allowedStay: "90 days",
    },
    {
      id: "tn",
      name: "Tunisia",
      visaRequirement: "visa-required",
    },
    {
      id: "kw",
      name: "Kuwait",
      visaRequirement: "visa-required",
    },
    {
      id: "vu",
      name: "Vanuatu",
      visaRequirement: "visa-free",
      allowedStay: "30 days",
    },
    {
      id: "tm",
      name: "Turkmenistan",
      visaRequirement: "visa-required",
    },
    {
      id: "hu",
      name: "Hungary",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "lt",
      name: "Lithuania",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "lv",
      name: "Latvia",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "ee",
      name: "Estonia",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "lu",
      name: "Luxembourg",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "nz",
      name: "New Zealand",
      visaRequirement: "visa-required",
    },
    {
      id: "is",
      name: "Iceland",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "cz",
      name: "Czechia",
      visaRequirement: "visa-required",
      tags: ["has-schengen-visa"],
    },
    {
      id: "aq",
      name: "Antarctica",
      visaRequirement: "visa-required",
      notes: "Special permit required",
    },
    {
      id: "dj",
      name: "Djibouti",
      visaRequirement: "visa-on-arrival",
      allowedStay: "31 days",
      notes: "eVisa also available.",
    },
    {
      id: "ba",
      name: "Bosnia and Herz.",
      visaRequirement: "visa-required",
      notes:
        "Visa-free for up to 30 days for valid UK or Schengen visa holders.",
    },
  ];

  // Initialize empty tags array for all countries that don't have tags specified
  const countriesWithTags = countries.map((country) => {
    if (!country.tags) {
      return { ...country, tags: [] };
    }
    return country;
  });

  return NextResponse.json({ countries: countriesWithTags });
}
