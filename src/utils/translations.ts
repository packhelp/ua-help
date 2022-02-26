import { Locale, LocaleDefinitions, Routes } from "./routes"

export type Locales = "en-US" | "pl-PL" | "uk-UA"
type Translation = {
  [k in Locales]: any
}

export const translations: Translation = {
  "en-US": {
    "/page-1": "Page 1",
    "/page-2": "Page 2",
    "/information/df245e9b8f824a93b58f30730034a5c7": "Information",
    "main-page": {
      "title-1": "Helping Ukraine",
      "title-2": "made easy",
      description:
        "We are here to help connect people in need with people that can provide help. Need lawyer, job, transport, medical aid, or something else? We got you!",
      "i-need-help-button": "I need help",
      "i-wanna-help-button": "I wanna help",
    },
    "details-page": {
      "comment-button": "Comment",
      "report-abuse-button": "Report abuse",
      "entity-information-section-title": "Entity information",
      "full-name": "Full name",
      "help-type": "Help type",
      "website": "Website",
      "phone": "Phone number",
      "email": "Email",
      "area-covered": "Area covered",
    }
  },
  "pl-PL": {
    "/page-1": "Strona 1",
    "/page-2": "Strona 2",
    "/information/df245e9b8f824a93b58f30730034a5c7": "Informacje",
    "main-page": {
      "title-1": "Pomoc Ukrainie",
      "title-2": "w łatwy sposób",
      description:
        "Jesteśmy po to by łączyć osoby potrzebujące z osobami, które pomoc chcą dostarczać. Potrzebujesz prawnika, pracę, pransport, pomoc medyczną, lub coś innego? Na pewno znajdziesz u nas pomoc!",
      "i-need-help-button": "Potrzebuję pomocy",
      "i-wanna-help-button": "Chcę pomóc",
    },
    "details-page": {
      "comment-button": "Skomentuj",
      "report-abuse-button": "Zgłoś naruszenie",
      "entity-information-section-title": "Informacje o bycie",
      "full-name": "Pełna nazwa",
      "help-type": "Typ pomocy",
      "website": "Strona",
      "phone": "Telefon",
      "email": "E-mail",
      "area-covered": "Miejsce pomocy",
    }
  },
  "uk-UA": {
    "/page-1": "Strona 1",
    "/page-2": "Strona 2",
    "/information/df245e9b8f824a93b58f30730034a5c7": "Information",
    "main-page": {
      "title-1": "Pomoc Ukrainie",
      "title-2": "w łatwy sposób",
      description: "<missing_translation>",
      "i-need-help-button": "<missing_translation>",
      "i-wanna-help-button": "<missing_translation>",
    },
    "details-page": {
      "comment-button": "<missing_translation>",
      "report-abuse-button": "<missing_translation>",
      "entity-information-section-title": "<missing_translation>",
      "full-name": "<missing_translation>",
      "help-type": "<missing_translation>",
      "website": "<missing_translation>",
      "phone": "<missing_translation>",
      "email": "<missing_translation>",
      "area-covered": "<missing_translation>",
    }
  }
}
