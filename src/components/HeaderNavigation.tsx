import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { NavigationLinks } from "./NavigationLinks"
import { RegionSwitcher } from "./RegionSwitcher"

export const HeaderNavigation = () => {
  const bg = useColorModeValue("white", "blue.500")
  return (
    <chakra.header
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      mb={10}
    >
      <NavigationLinks />
      <RegionSwitcher />
    </chakra.header>
  )
}