// Country types
export interface Country {
  id: string;
  name: string;
  region: string;
  visaFree: string[];
  visaOnArrival?: string[];
}

// Visa types
export enum VisaType {
  VISA_FREE = "VISA_FREE",
  VISA_ON_ARRIVAL = "VISA_ON_ARRIVAL",
  E_VISA = "E_VISA",
  VISA_REQUIRED = "VISA_REQUIRED",
  NOT_ALLOWED = "NOT_ALLOWED",
}

export interface VisaRequirement {
  countryId: string;
  type: VisaType;
  maxStay?: number; // in days
  notes?: string;
}

// User types for future authentication
export interface User {
  id: string;
  name: string;
  email: string;
  countryOfCitizenship: string;
  existingVisas?: ExistingVisa[];
}

export interface ExistingVisa {
  countryId: string;
  expiryDate: string; // ISO date string
  type: string;
  multipleEntry: boolean;
}
