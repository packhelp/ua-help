import { translations } from "./translations"

export enum LocaleDefinitions {
  PL = "pl-PL",
  US = "en-US",
  UA = "uk-UA"
}

export type Locale = LocaleDefinitions.PL | LocaleDefinitions.US | LocaleDefinitions.UA

export const locales = [LocaleDefinitions.US, LocaleDefinitions.PL, LocaleDefinitions.UA]

export enum RouteDefinitions {
  Page1 = "/page-1",
  Page2 = "/page-2",
  Page3 = "/page-3",
}

export type Routes =
  | RouteDefinitions.Page1
  | RouteDefinitions.Page2
  | RouteDefinitions.Page3

export const getRouteNameForLocale = (route: Routes, locale: Locale = LocaleDefinitions.US) => {
  return translations[locale][route]
}

export const isRouteActive = (route: Routes) => {
  return window.location.pathname === route
}
