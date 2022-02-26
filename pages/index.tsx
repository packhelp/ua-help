import type { NextPage } from "next"
import { Button, Container, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { translations } from "../src/utils/translations"

const Home: NextPage = () => {
  const { locale } = useRouter()

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          {translations[locale]["main-page"]["title-1"]}{' '}
          <Text as={'span'} color={'green.400'}>
            {translations[locale]["main-page"]["title-2"]}
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          {translations[locale]["main-page"]["description"]}
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'green.400'}
            _hover={{ bg: 'green.500' }}>
            {translations[locale]["main-page"]["i-need-help-button"]}
          </Button>
          <Link
            href="https://docs.google.com/forms/d/1EFouRYTfOeiFs6fw9mJriJsIRwRrBrdTkLU1sh9s--g/edit"
            target="_blank"
          >
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}
          >
            {translations[locale]["main-page"]["i-wanna-help-button"]}
          </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
