import { translations } from "./translations"

export enum LocaleDefinitions {
  PL = "pl-PL",
  US = "en-US",
  UA = "uk-UA",
}

export enum LocaleFlags {
  "pl-PL" = "svg/poland.svg",
  "en-US" = "svg/united-kingdom.svg",
  "uk-UA" = "svg/ukraine.svg",
}

export enum LocaleNames {
  "pl-PL" = "Polski",
  "en-US" = "English",
  "uk-UA" = "Ukraiński",
}

export type Locale =
  | LocaleDefinitions.PL
  | LocaleDefinitions.US
  | LocaleDefinitions.UA

export const locales = [
  LocaleDefinitions.US,
  LocaleDefinitions.PL,
  LocaleDefinitions.UA,
]

export enum RouteDefinitions {
  PageInformation = "/information/df245e9b8f824a93b58f30730034a5c7",
  PageInitiatives = "/initiatives",
}

export type Routes =
  | RouteDefinitions.PageInformation
  | RouteDefinitions.PageInitiatives

export const getRouteNameForLocale = (
  route: Routes,
  locale: Locale = LocaleDefinitions.US
) => {
  return translations[locale][route]
}
