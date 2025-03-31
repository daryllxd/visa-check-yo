"use client";

import { Country } from "@/app/api/countries/route";
import { useCountryStore } from "@/lib/stores/useCountryStore";
import { useEffect } from "react";

interface InitializeStoresProps {
  countries: Country[];
}

const InitializeStores = ({ countries }: InitializeStoresProps) => {
  const { setCountries } = useCountryStore();

  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  return null;
};

export { InitializeStores };
