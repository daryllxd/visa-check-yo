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

  updateEnhancedCountries: (selectedVisaIds: string[]) => {
    const { countries } = get();

    if (selectedVisaIds.length === 0) {
      set({ enhancedCountries: countries });
      return;
    }

    const enhancedCountries = countries.map((country) => {
      const hasVisaAccess = selectedVisaIds.some((visaId) => {
        switch (visaId) {
          case "has-us-visa":
          case "has-us-visa-unused":
            return country.tags?.includes("has-us-visa");
          case "has-schengen-visa":
            return country.tags?.includes("has-schengen-visa");
          case "has-uk-visa":
            return country.tags?.includes("has-uk-visa");
          case "has-japan-visa":
            return country.tags?.includes("has-japan-visa");
          case "has-korea-visa":
            return country.tags?.includes("has-korea-visa");
          case "has-apec-card":
            return country.tags?.includes("has-apec-card");
          default:
            return false;
        }
      });

      // If the country allows access with one of the selected visas, update its status
      if (hasVisaAccess) {
        // Create a copy with modified visa requirement
        return {
          ...country,
          visaRequirement: "visa-free" as const,
          allowedStay: country.allowedStay || "Check details",
          notes: `${country.notes} (Access with your selected visa)`,
          tags: country.tags,
        };
      }

      return country;
    });

    set({ enhancedCountries });
  },
}));
