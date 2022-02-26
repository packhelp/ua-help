import React from "react"
import { chakra, Flex, useColorModeValue } from "@chakra-ui/react"
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
      <Flex justifyContent={"space-between"} display={{ base: "none", sm: "none", md: "flex" }}>
        <div>
          <NavigationLinks />
        </div>
        <RegionSwitcher />
      </Flex>
    </chakra.header>
  )
}
