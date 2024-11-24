import { Country } from '@/types';
import { mapCountryData } from '@/utils/countryMapper';
import { useEffect, useState } from 'react';
import countriesData from '../../data.json';

export function useCountryDetail(countryCode: string | undefined) {
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (!countryCode) return;

    const allCountries = countriesData.map(mapCountryData);
    const foundCountry = allCountries.find((c) => c.cca3 === countryCode);

    if (foundCountry) {
      setCountry(foundCountry);
      const borders = foundCountry.borders || [];
      const borderCountriesData = allCountries.filter((c) => borders.includes(c.cca3));
      setBorderCountries(borderCountriesData);
    }
  }, [countryCode]);

  return {
    country,
    borderCountries,
  };
}
