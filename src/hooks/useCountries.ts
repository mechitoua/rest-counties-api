import { useState, useEffect } from 'react';
import { Country } from '@/types';
import countriesData from '../../data.json';
import { mapCountryData } from '@/utils/countryMapper';

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const mappedCountries = countriesData.map(mapCountryData);
    setCountries(mappedCountries);
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return {
    countries: filteredCountries,
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
  };
}
