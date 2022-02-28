import React from "react"
import { Box, Badge, Text, SimpleGrid, Link } from "@chakra-ui/react"
import { InitiativesDTO } from "../../services/charity-data"

type InitiativesListTileProps = {
  data: InitiativesDTO[]
}

export const InitiativesList = (props: InitiativesListTileProps) => {
  const { data } = props
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="2em" mt={4}>
      {data.map((charity, idx) => (
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
  )
}
