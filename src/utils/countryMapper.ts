import { Country } from '@/types';

export interface RawCountryData {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld?: string[];
  topLevelDomain?: string[];
  cca3?: string;
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string | string[];
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population: number;
  borders?: string[];
  flags: {
    svg: string;
    alt?: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
}

export function mapCountryData(country: RawCountryData): Country {
  return {
    name: {
      common: country.name.common || (typeof country.name === 'string' ? country.name : ''),
      official: country.name.official || (typeof country.name === 'string' ? country.name : ''),
      nativeName:
        country.altSpellings && country.altSpellings.length > 1
          ? { native: { common: country.altSpellings[1] } }
          : country.name.nativeName || {},
    },
    tld: country.tld || country.topLevelDomain || [],
    cca3: country.cca3 || country.alpha3Code || '',
    alpha2Code: country.alpha2Code || '',
    alpha3Code: country.alpha3Code || '',
    callingCodes: country.callingCodes || [],
    capital: Array.isArray(country.capital)
      ? country.capital
      : country.capital
      ? [country.capital]
      : [],
    altSpellings: country.altSpellings || [],
    subregion: country.subregion || '',
    region: country.region || '',
    population: country.population,
    borders: country.borders || [],
    flags: {
      svg: country.flags.svg || '',
      alt: country.flags.alt || '',
    },
    currencies: country.currencies || {},
    languages: Array.isArray(country.languages)
      ? country.languages.reduce(
          (
            acc: Record<string, string>,
            lang: {
              iso639_1?: string;
              iso639_2?: string;
              name: string;
            }
          ) => {
            const langCode = lang.iso639_1 || lang.iso639_2 || '';
            if (langCode && lang.name) {
              acc[langCode] = lang.name;
            }
            return acc;
          },
          {}
        )
      : country.languages || {},
  };
}
