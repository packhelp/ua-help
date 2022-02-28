import type { NextPage } from "next"
import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { translations, Locales } from "../src/utils/translations"
import { config } from "../src/config"
import { RouteDefinitions } from "../src/utils/routes"
import { NavigationLink } from "../src/components/NavigationLink"
import React from "react"

const Home: NextPage = () => {
  const { locale } = useRouter()

  let finalLocale: Locales = "uk-UA"
  if (locale != null) {
    finalLocale = locale as any as Locales
  }

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {translations[finalLocale]["main-page"]["title-1"]}{" "}
          <Text as={"span"} color={"green.400"}>
            {translations[finalLocale]["main-page"]["title-2"]}
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          {translations[finalLocale]["main-page"]["description"]}
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href={RouteDefinitions.PageInitiatives}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
            >
              {
                translations[finalLocale]["main-page"][
                  "list-of-initiatives-button"
                ]
              }
            </Button>
          </Link>
          <Link href={config.addNewEntityFormLink} target="_blank">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              {translations[finalLocale]["main-page"]["add-initiative-button"]}
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
