import { translations } from "./translations"

export enum LocaleDefinitions {
  PL = "pl-PL",
  US = "en-US",
  UA = "uk-UA",
}

export enum LocaleFlags {
  "pl-PL" = "🇵🇱",
  "en-US" = "🇺🇸",
  "uk-UA" = "🇺🇦",
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
  Page1 = "/page-1",
  Page2 = "/page-2",
  Page3 = "/information/df245e9b8f824a93b58f30730034a5c7",
  PageCharityList = "/charity-list",
}

export type Routes =
  | RouteDefinitions.Page1
  | RouteDefinitions.Page2
  | RouteDefinitions.Page3
  | RouteDefinitions.PageCharityList

export const getRouteNameForLocale = (
  route: Routes,
  locale: Locale = LocaleDefinitions.US
) => {
  return translations[locale][route]
}
