import { Country } from "@/app/api/countries/route";
import { create } from "zustand";

interface CountryState {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  getCountryById: (id: string) => Country | undefined;
  enhancedCountries: Country[];
  updateEnhancedCountries: (selectedVisaIds: string[]) => void;
}

export const useCountryStore = create<CountryState>((set, get) => ({
  countries: [],
  enhancedCountries: [],

  setCountries: (countries) =>
    set(() => ({
      countries,
      enhancedCountries: countries,
    })),

  getCountryById: (id) => {
    return get().countries.find((country) => country.id === id);
  },

  updateEnhancedCountries: (selectedVisaIds) => {
    const { countries } = get();

    if (selectedVisaIds.length === 0) {
      set({ enhancedCountries: countries });
      return;
    }

    const enhancedCountries = countries.map((country) => {
      // Check if country notes mention access with any of the selected visas
      const hasVisaAccess = selectedVisaIds.some((visaId) => {
        if (!country.notes) return false;

        const lowerNotes = country.notes.toLowerCase();

        switch (visaId) {
          case "has-us-visa":
          case "has-us-visa-unused":
            return (
              lowerNotes.includes("u.s") ||
              lowerNotes.includes("us ") ||
              lowerNotes.includes("united states")
            );
          case "has-uk-visa":
            return (
              lowerNotes.includes("uk ") ||
              lowerNotes.includes("united kingdom")
            );
          case "has-schengen-visa":
            return lowerNotes.includes("schengen");
          case "has-japan-visa":
            return lowerNotes.includes("japan");
          case "has-korea-visa":
            return lowerNotes.includes("korea");
          case "has-apec-card":
            return lowerNotes.includes("apec");
          default:
            return false;
        }
      });

      // If the country allows access with one of the selected visas, update its status
      if (hasVisaAccess && country.visaRequirement === "visa-required") {
        // Create a copy with modified visa requirement
        return {
          ...country,
          visaRequirement: "visa-free" as const,
          allowedStay: country.allowedStay || "Check details",
          notes: `${country.notes} (Access with your selected visa)`,
        };
      }

      return country;
    });

    set({ enhancedCountries });
  },
}));
