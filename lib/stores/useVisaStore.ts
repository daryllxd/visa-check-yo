import { create } from "zustand";

export type VisaOption = {
  id: string;
  label: string;
  selected: boolean;
};

interface VisaState {
  visaOptions: VisaOption[];
  toggleVisa: (id: string) => void;
  resetVisas: () => void;
}

const defaultVisaOptions: VisaOption[] = [
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

export const useVisaStore = create<VisaState>((set) => ({
  visaOptions: defaultVisaOptions,
  toggleVisa: (id) =>
    set((state) => ({
      visaOptions: state.visaOptions.map((visa) =>
        visa.id === id ? { ...visa, selected: !visa.selected } : visa,
      ),
    })),
  resetVisas: () =>
    set(() => ({
      visaOptions: defaultVisaOptions,
    })),
}));
