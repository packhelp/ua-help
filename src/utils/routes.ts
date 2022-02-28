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
  PageInformation = "/information/ade08590c3fc447a815ed413588e66f7",
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
