import React from "react"
import { Locales, translations } from "../../../src/utils/translations"
import { Tag, TagLabel, HStack, Flex } from "@chakra-ui/react"

const helpCategory = [
  {
    id: "charity",
    name: "Charity",
  },
  {
    id: "accommodation",
    name: "Accommodation",
  },
  {
    id: "information",
    name: "Information",
  },
  {
    id: "legal",
    name: "Legal",
  },
  {
    id: "clothes",
    name: "Clothes",
  },
  {
    id: "work",
    name: "Work",
  },
  {
    id: "transport",
    name: "Transportation",
  },
  {
    id: "financial",
    name: "Financial",
  },
  {
    id: "aggregator",
    name: "Aggregators",
  },
]

type FiltersProps = {
  locale: Locales
  filteredBy: string
  setFilteredBy: (category: string) => void
}

export const InitiativesListFilters = (props: FiltersProps) => {
  const { filteredBy, setFilteredBy, locale } = props
  return (
    <>
      {translations[locale]["generic"]["filter-by-type-of-help"]}
      <HStack spacing={4}>
        <Flex display="flex" alignItems="center">
          <Tag
            size={"sm"}
            borderRadius="full"
            variant={filteredBy === "" ? "solid" : "ghost"}
            colorScheme="blue"
            cursor="pointer"
            onClick={() => setFilteredBy("")}
          >
            <TagLabel>{"All"}</TagLabel>
          </Tag>
          {helpCategory.map((category) => (
            <Tag
              size={"sm"}
              key={category.id}
              borderRadius="full"
              variant={category.id === filteredBy ? "solid" : "ghost"}
              colorScheme="blue"
              cursor="pointer"
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
