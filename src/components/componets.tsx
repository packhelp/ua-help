import React, { useState } from "react"
import {
  Tr,
  Th,
  Tag,
  TagLabel,
  HStack,
  Flex,
  Box,
  Badge,
  Text,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"

import { InitiativesDataStore, InitiativesDTO } from "../services/charity-data"
import { useRouter } from "next/router"
import { Locales, translations } from "../../src/utils/translations"

interface InitiativesViewProps {
  initiativesDataDTO: InitiativesDTO[]
}

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

const Filters = (props: FiltersProps) => {
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
      <Filters
        locale={finalLocale}
        filteredBy={filteredBy}
        setFilteredBy={setFilteredBy}
      />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="2em" mt={4}>
        {filtered.map((charity, idx) => (
          <>
            <Box key={idx} p="5" maxW="320px" borderWidth="1px">
              <Box
                borderRadius={5}
                height={156}
                backgroundColor="gray.200"
                // background={[
                //   "linear-gradient(180deg, #3a75c4 50%, #f9dd16 50%)",
                // ]} # ukrainian flag, but I'm not sure if it's right to use it as too many pages misses images and it might be overwhelming
                backgroundImage={charity.image}
                backgroundSize={["cover"]}
                backgroundPosition={["center"]}
              />
              <div style={{ lineHeight: "1em", marginTop: "0.5em" }}>
                {charity.helpKind.split(",").map((badge, idx) => (
                  <Badge
                    fontSize="0.5em"
                    mr={1}
                    mt={1}
                    key={idx}
                    colorScheme="blue"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <Text
                mt={2}
                fontSize="l"
                fontWeight="semibold"
                lineHeight="short"
                textTransform="uppercase"
              >
                {charity.fullName}
              </Text>
              <Text mb={2} fontSize="sm" fontWeight="bold" color="blue.800">
                {charity.areaCovered}
              </Text>
              <Text fontSize="xs">
                <SimpleGrid
                  columns={2}
                  spacing="1em"
                  mb={2}
                  spacingY="4px"
                  templateColumns="40px auto;"
                >
                  {charity.url && (
                    <>
                      <b>Link</b>
                      <Link href={charity.url}>go to page</Link>
                    </>
                  )}
                  {charity.phoneNumber && (
                    <>
                      <b>Phone</b> <span>{charity.phoneNumber}</span>
                    </>
                  )}
                  {charity.email && (
                    <>
                      <b>E-mail</b>
                      <Link href={`mailto:${charity.email}`}>
                        {charity.email}
                      </Link>
                    </>
                  )}
                </SimpleGrid>
                {charity.info}
              </Text>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  )
}
