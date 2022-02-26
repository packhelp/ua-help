import React from "react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import { getRouteNameForLocale, Locale, Routes } from "../utils/routes"
import { useRouter } from "next/router";

type NavigationLinkProps = {
  route: Routes
}

export const NavigationLink = (props: NavigationLinkProps) => {
  const { route } = props
  const { locale } = useRouter();

  const currentLocale = locale as Locale

  return (
    <Link href={route}>
      <Button size="sm" mr="10px">
        {getRouteNameForLocale(route, currentLocale)}
      </Button>
    </Link>
  )
}
