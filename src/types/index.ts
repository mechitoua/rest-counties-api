export interface RawCountryData {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population: number;
  borders?: string[];
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  languages?: {
    iso639_1?: string;
    iso639_2?: string;
    name: string;
    nativeName?: string;
  }[];
  currencies?: {
    code: string;
    name: string;
    symbol: string;
  }[];
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca3: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string[];
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  borders: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: { [key: string]: string };
}
