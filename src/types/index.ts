export type CountryData = {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: Media;
  id: number;
};

export type Media = {
  flag: string;
  emblem: string;
  orthographic: string;
};

export type CountryDataList = CountryData[];
