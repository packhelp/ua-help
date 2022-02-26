import React from "react"
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Link, Flex, SpaceProps, HStack, Tag, Button, Divider,
} from "@chakra-ui/react"
import { config } from "../../src/config"
import { translations } from "../../src/utils/translations"
import { useRouter } from "next/router"
import { Tags } from "../../src/components/Tags"

const data = {
  fullName: "Grupa Zasoby",
  description: `Kanapa, łóżko, dwa łóżka, pokój lub pokoje, mieszkanie, dom. Nocleg i schronienie dla Ukraińców i Ukrainek, doraźnie lub na stałe. Tabelowalne, kwantyfikowalne, konkretne i bardzo potrzebne wsparcie. 
  
  1. Wypełniacie formularz zgłoszeniowy, w którym podajecie szczegóły dotyczące noclegu i kontaktu. TYLKO WARSZAWA. Jeśli oferujecie nocleg w innych regionach, komentujcie pod danymi wątkami i organizujcie się sami - to jest dla Was przestrzeń do zagregowania danych. MY ZAJMUJEMY SIĘ TYLKO WARSZAWĄ I OKOLICAMI.
  2. Jesteśmy w stałym kontakcie z Fundacją Ocalenie. Ocalenie przekazuje informacje o nas osobom potrzebującym schronienia. Zbieramy też indywidualne prośby o wsparcie noclegowe. KONTAKTUJEMY SIĘ TYLKO Z OSOBAMI, KTÓRE JUŻ SĄ W WARSZAWIE NA MIEJSCU. 
  3. Łączymy Was z potrzebującymi jak najlepiej i najadekwatniej potrafimy w tym trudnym czasie i na tym kończy się nasza rola. Reszta jest po Waszej stronie. Jest w to wpisane ryzyko, które musicie oszacować sami. Działamy. To się dzieje teraz.`,
  helpType: "Collecting clothes, Accommodation, Coordination",
  website: "https://www.facebook.com/groups/zasobygrupa",
  phone: "+48 601 601 601",
  email: "some-email@gmail.com",
  areaCovered: "Warszawa i okolice",
}

export default function Simple() {
  const { locale } = useRouter()
  
  const descriptionSplitByNewLines = data.description.split("\n")

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 6 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {data.fullName}
            </Heading>
            {/*<Text*/}
            {/*  color={useColorModeValue("gray.500", "gray.400")}*/}
            {/*  fontWeight={300}*/}
            {/*  fontSize={"2xl"}*/}
            {/*  mt="20px"*/}
            {/*>*/}
            {/*  Collecting clothes, Accommodation, Coordination*/}
            {/*</Text>*/}
            <Tags tags={["Collecting clothes", "Accommodation", "Coordination"]} marginTop="3" />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {descriptionSplitByNewLines.map(descriptionLine => (
                <Text fontSize={"lg"}>
                  {descriptionLine}
                </Text>
              ))}

            </VStack>

          </Stack>
        </Stack>
        <Flex>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}>
              {translations[locale]["details-page"]["entity-information-section-title"]}
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["full-name"]}:
                </Text>{" "}
                {data.fullName}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["help-type"]}:
                </Text>{" "}
                {data.helpType}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["website"]}:
                </Text>{" "}
                <Link href={data.website}>
                  {data.website}
                </Link>
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["phone"]}:
                </Text>{" "}
                <Link href={`tel:${data.phone}`}>
                  {data.phone}
                </Link>
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["email"]}:
                </Text>{" "}
                <Link href={`mail:${data.email}`}>
                  {data.email}
                </Link>
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  {translations[locale]["details-page"]["area-covered"]}:
                </Text>{" "}
                {data.areaCovered}
              </ListItem>
            </List>
            <Divider borderColor="gray.200" mt="20px" mb="20px" />
            <StackDivider borderColor="gray.200" />
            <VStack
              spacing={4}
              align="stretch"
            >
              <Button colorScheme="blue" size="lg" minWidth="100%">
                {translations[locale]["details-page"]["comment-button"]}
              </Button>
              <Link href={config.reportAbuseFormLink} target="_blank">
                <Button colorScheme="red" size="lg" minWidth="100%">
                  {translations[locale]["details-page"]["report-abuse-button"]}
                </Button>
              </Link>
            </VStack>
          </Box>

        </Flex>
      </SimpleGrid>
    </Container>
  )
}
//    "details-page": {
//       "comment-button": "Comment",
//       "report-abuse-button": "Report abuse",
//       "entity-information-section-title": "Entity information",
//       "full-name": "Full name",
//       "help-type": "Help type",
//       "website": "Website",
//       "phone": "Phone number",
//       "email": "Email",
//       "area-covered": "Area covered",
//     }
