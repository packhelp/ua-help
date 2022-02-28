import React from "react"
import { RouteDefinitions } from "../utils/routes"
import { NavigationLink } from "./NavigationLink"

export const NavigationLinks = () => {
  return (
    <>
      <NavigationLink route={RouteDefinitions.PageInitiatives} />
      <NavigationLink route={RouteDefinitions.PageInformation} />
    </>
  )
}
