import React from "react"
import {
  chakra,
  Flex,
  IconButton,
  Box,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
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
      position="sticky"
      top={0}
    >
      <Desktop />
      <Mobile />
    </chakra.header>
  )
}

const Desktop = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignContent={"center"}
      display={{ base: "none", sm: "none", md: "flex" }}
    >
      <div>
        <NavigationLinks />
      </div>
      <RegionSwitcher />
    </Flex>
  )
}

const Mobile = () => {
  const { isOpen = false, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      display={{ base: "flex", sm: "flex", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        paddingRight={"10px"}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          alignItems={"center"}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={isOpen ? onClose : onOpen}
        />
        <RegionSwitcher />
      </Flex>
      {isOpen && (
        <Box width={"100%"}>
          <Stack as={"nav"} spacing={4}>
            <NavigationLinks />
          </Stack>
        </Box>
      )}
    </Flex>
  )
}
