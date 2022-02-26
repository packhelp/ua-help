import React from "react";
import { chakra, Flex, useColorModeValue } from "@chakra-ui/react"
import { LocaleFlags, LocaleDefinitions } from "../utils/routes"

export const FooterNavigation = () => {
  const bg = useColorModeValue("white", "blue.500")
  return (
    <chakra.footer
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
    >
      <Flex justifyContent={"center"}>
        {LocaleFlags[LocaleDefinitions.PL]}
        {" Poland <3 Ukraine "}
        {LocaleFlags[LocaleDefinitions.UA]}
      </Flex>
    </chakra.footer>
  )
}