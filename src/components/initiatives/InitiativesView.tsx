import React, { useState } from "react"
import {
  Flex,
  Box,
  Badge,
  Text,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"

import { InitiativesDataStore, InitiativesDTO } from "../../services/charity-data"
import { useRouter } from "next/router"
import { Locales, translations } from "../../utils/translations"
import { InitiativesListFilters } from "./InitiativesListFilters"
import { InitiativesList } from "./InitiativesList"

interface InitiativesViewProps {
  initiativesDataDTO: InitiativesDTO[]
}

export const InitiativesView = ({
  initiativesDataDTO,
}: InitiativesViewProps) => {
  const cds = new InitiativesDataStore(initiativesDataDTO)
  const pub = cds.publicCharityData

  const { locale } = useRouter()

  let finalLocale: Locales = "uk-UA"

  if (locale != null) {
    finalLocale = locale as any as Locales
  }

  const [filteredBy, setFilteredBy] = useState("")

  const filtered = pub.filter((el) =>
    el.helpKind.toLowerCase().includes(filteredBy)
  )

  return (
    <>
      <InitiativesListFilters
        locale={finalLocale}
        filteredBy={filteredBy}
        setFilteredBy={setFilteredBy}
      />
      <InitiativesList
          data={filtered}
          locale={finalLocale}
      />
    </>
  )
}
