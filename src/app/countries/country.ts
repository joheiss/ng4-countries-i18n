export interface ICurrency {
    code: string;
    name: string;
    symbol: string;
}

export interface ILanguage {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface IRegionalBlocs {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
}

export class Country {

    constructor(public name: string,
                public topLevelDomain: string[],
                public alpha2Code: string,
                public alpha3Code: string,
                public callingCodes: string[],
                public capital: string,
                public altSpellings: string[],
                public region: string,
                public subregion: string,
                public population: number,
                public latlng: number[],
                public demonym: string,
                public area: number,
                public gini: number,
                public timezones: string[],
                public borders: string[],
                public nativeName: string,
                public numericCode: string,
                public currencies: ICurrency[],
                public languages: ILanguage[],
                public translations: { [key: string]: string },
                public flag: string,
                public regionalBlocs: IRegionalBlocs[]) {}
}

export class SearchCriteria {

  constructor(public term: string = '',
              public africa: boolean = true,
              public antarctica: boolean = true,
              public asia: boolean = true,
              public australia: boolean = true,
              public america: boolean = true,
              public europe: boolean = true,
              public none: boolean = true) { }
}
