import React, { ReactNode, useContext, useMemo, useState, useEffect } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Tag,
  TagLabel,
  TagCloseButton,
  TableCaption,
  HStack,
  Flex
} from "@chakra-ui/react"
import { CharityDataStore, CharityDTO } from "../services/charity-data"
import { useRouter } from "next/router"
import { Locales, translations } from "../../src/utils/translations"
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

interface CharityTableProps {
  charityDataDTO: CharityDTO[]
}

const helpCategory = [
    {
        id: "charity",
        name: "Charity"
    },
    {
        id: "accommodation",
        name: "Accommodation"
    },
    {
        id: "information",
        name: "Information"
    },
    {
        id: "legal",
        name: "Legal"
    },
    {
        id: "clothes",
        name: "Clothes"
    },
    {
        id: "work",
        name: "Work"
    },
    {
        id: "transport",
        name: "Transportation"
    },
    {
        id: "financial",
        name: "Financial"
    },
    {
        id: "aggregator",
        name: "Aggregators"
    }
]

const TableHeaderRow = ({ locale }) => {
    return (
        <Tr>
            <Th>{translations[locale]["generic"]["name"]}</Th>
            <Th>{translations[locale]["generic"]["website"]}</Th>
            <Th isNumeric>{translations[locale]["generic"]["phone"]}</Th>
            <Th isNumeric>{translations[locale]["generic"]["email"]}</Th>
            <Th>{translations[locale]["generic"]["help-kind"]}</Th>
            <Th>{translations[locale]["generic"]["area-covered"]}</Th>
            <Th>{translations[locale]["generic"]["info"]}</Th>
        </Tr>
    )
}

type FiltersProps = {
    locale: Locales,
    filteredBy: string,
    setFilteredBy: (category: string) => void
}

const Filters = (props: FiltersProps) => {
    const { filteredBy, setFilteredBy, locale } = props
    return (
        <>
            {translations[locale]["generic"]["filter-by-type-of-help"]}
            <HStack spacing={4}>
                <Flex display="flex" alignItems="center">
                    <Tag
                        size={"sm"}
                        borderRadius='full'
                        variant={filteredBy === "" ? 'solid' : 'ghost'}
                        colorScheme='blue'
                        cursor='pointer'
                        onClick={() => setFilteredBy("")}
                    >
                        <TagLabel>{"All"}</TagLabel>
                    </Tag>
                    {helpCategory.map((category) => (
                        <Tag
                            size={"sm"}
                            key={category.id}
                            borderRadius='full'
                            variant={category.id === filteredBy ? 'solid' : 'ghost'}
                            colorScheme='blue'
                            cursor='pointer'
                            onClick={() => setFilteredBy(category.id)}
                        >
                            <TagLabel>{category.name}</TagLabel>
                        </Tag>
                    ))}
                </Flex>
            </HStack>
        </>
    )
}

export const CharityDataTable = ({ charityDataDTO }: CharityTableProps) => {
  const cds = new CharityDataStore(charityDataDTO)
  const pub = cds.publicCharityData

  const { locale } = useRouter()

  let finalLocale: Locales = "uk-UA"

  if (locale != null) {
    finalLocale = locale as any as Locales
  }

  const [filteredBy, setFilteredBy] = useState("")

  const filtered = pub.filter((el) => el.helpKind.toLowerCase().includes(filteredBy))

  return (
      <>
          <Filters locale={finalLocale} filteredBy={filteredBy} setFilteredBy={setFilteredBy} />
          <Table variant="simple">
              {/* <TableCaption>Charity List</TableCaption> */}
              <Thead>
                  <TableHeaderRow locale={finalLocale} />
              </Thead>
              <Tbody>
                  {filtered.map((charity, idx) => (
                      <Tr key={idx}>
                          <Td>{charity.fullName}</Td>
                          <Td>{charity.url ? <a href={charity.url}>link</a> : null} </Td>
                          <Td isNumeric>
                              {charity.phoneNumber ? charity.phoneNumber : null}
                          </Td>
                          <Td isNumeric>{charity.email ? charity.email : null}</Td>
                          <Td>{charity.helpKind}</Td>
                          <Td>{charity.areaCovered}</Td>
                          <Td>{charity.info}</Td>
                      </Tr>
                  ))}
              </Tbody>
              <Tfoot>
                  <TableHeaderRow locale={finalLocale} />
              </Tfoot>
          </Table>
      </>
  )
}
