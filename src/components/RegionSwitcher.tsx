import React from "react"
import { useRouter } from "next/router"
import { Locale, LocaleFlags, LocaleNames, locales } from "../utils/routes"
import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { Flex, Image } from "@chakra-ui/react"

export const RegionSwitcher = () => {
  const { asPath, locale } = useRouter()

  const currentLocale = locale as Locale

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton>
          <Image src={LocaleFlags[currentLocale]} alt="" width={22} />
        </MenuButton>
        <MenuList  p={0} minW="0" w={'100px'}>
          {locales.map((l, i) => {
            return (
              <Link key={l} href={asPath} locale={l}>
                <MenuItem justifyContent={"center"}>
                  <Image src= {LocaleFlags[l]} alt={LocaleNames[l]} width={22} />
                </MenuItem>
              </Link>
            )
          })}
        </MenuList>
      </Menu>
    </Flex>
  )
}
