import { Country } from '@/types';

export function mapCountryData(country: any): Country {
  return {
    name: {
      common: country.name.common || country.name,
      official: country.name.official || country.name,
      nativeName: country.altSpellings && country.altSpellings.length > 1 
        ? { native: { common: country.altSpellings[1] } }
        : country.name.nativeName || {},
    },
    tld: country.tld || country.topLevelDomain,
    cca3: country.cca3 || country.alpha3Code,
    alpha2Code: country.alpha2Code,
    alpha3Code: country.alpha3Code,
    callingCodes: country.callingCodes,
    capital: Array.isArray(country.capital) ? country.capital : country.capital ? [country.capital] : [],
    altSpellings: country.altSpellings,
    subregion: country.subregion,
    region: country.region,
    population: country.population,
    borders: country.borders,
    flags: {
      svg: country.flags.svg,
      alt: country.flags.alt,
    },
    currencies: country.currencies || {},
    languages: Array.isArray(country.languages)
      ? country.languages.reduce((acc: any, lang: any) => {
          acc[lang.iso639_1 || lang.iso639_2] = lang.name;
          return acc;
        }, {})
      : country.languages || {},
  };
}
