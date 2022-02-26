import React from "react"
import { RouteDefinitions } from "../utils/routes"
import { NavigationLink } from "./NavigationLink"

export const NavigationLinks = () => {
  return (
    <div>
      <NavigationLink route={RouteDefinitions.Page1} />
      <NavigationLink route={RouteDefinitions.Page2} />
      <NavigationLink route={RouteDefinitions.Page3} />
    </div>
  )
}