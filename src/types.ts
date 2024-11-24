export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { common: string }>;
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
  borders?: string[];
  flags: {
    svg: string;
    png?: string;
    alt?: string;
  };
  currencies: Record<string, { name: string; symbol?: string }>;
  languages: Record<string, string>;
}
