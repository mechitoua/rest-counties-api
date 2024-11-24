import { Country, RawCountryData } from '@/types/index';

export function mapCountryData(country: RawCountryData): Country {
  const languages = (country.languages || []).reduce((acc, lang) => {
    if (lang.iso639_1) {
      acc[lang.iso639_1] = lang.name;
    }
    return acc;
  }, {} as { [key: string]: string });

  const currencies = (country.currencies || []).reduce((acc, curr) => {
    acc[curr.code] = {
      name: curr.name,
      symbol: curr.symbol,
    };
    return acc;
  }, {} as { [key: string]: { name: string; symbol: string } });

  const nativeName = country.altSpellings?.[1] || country.name;

  return {
    name: {
      common: country.name,
      official: country.name,
      nativeName: {
        native: {
          official: nativeName,
          common: nativeName,
        },
      },
    },
    tld: country.topLevelDomain || [],
    cca3: country.alpha3Code || '',
    alpha2Code: country.alpha2Code || '',
    alpha3Code: country.alpha3Code || '',
    callingCodes: country.callingCodes || [],
    capital: country.capital ? [country.capital] : [],
    altSpellings: country.altSpellings || [],
    subregion: country.subregion || '',
    region: country.region || '',
    population: country.population,
    borders: country.borders || [],
    flags: {
      svg: country.flags.svg || '',
      png: country.flags.png || '',
      alt: country.flags.alt || '',
    },
    currencies,
    languages,
  };
}
