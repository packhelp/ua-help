import React from "react";
import { chakra, Flex, useColorModeValue } from "@chakra-ui/react"

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
        {"Poland <3 Ukraine"}
      </Flex>
    </chakra.footer>
  )
}