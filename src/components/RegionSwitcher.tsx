import React from "react"
import { useRouter } from 'next/router';
import { Locale, LocaleFlags, LocaleNames, locales } from "../utils/routes"
import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"

export const RegionSwitcher = () => {
  const { asPath, locale } = useRouter();

  const currentLocale = locale as Locale

  return (
    <div>
      <Menu>
        <MenuButton>
          {LocaleFlags[currentLocale]}
        </MenuButton>

        <MenuList>
          {locales.map((l, i) => {
            return (
              <Link key={l} href={asPath} locale={l}>
                <MenuItem>
                  {LocaleFlags[l]} {LocaleNames[l]}
                </MenuItem>
              </Link>
            )
          })}
        </MenuList>
      </Menu>
    </div>
  )
}
