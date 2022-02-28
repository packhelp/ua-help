import React from "react"
import {
  chakra,
  Flex,
  Image,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"

export const FooterNavigation = () => {
  const bg = useColorModeValue("white", "blue.500")
  return (
    <chakra.footer bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box p="2">
          <Image src="svg/poland-flag.svg" alt="Poland" boxSize="15px" />
        </Box>
        <Text>Poland</Text>
        <Box p="1">
          <Image src="svg/love.svg" alt="love" boxSize="20px" />
        </Box>
        <Text>Ukraine</Text>
        <Box p="2">
          <Image src="svg/ukraine-flag.svg" alt="Ukraine" boxSize="15px" />
        </Box>
      </Flex>
    </chakra.footer>
  )
}
