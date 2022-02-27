import { HStack, SpaceProps, Tag } from "@chakra-ui/react"
import React from "react"

export interface Tags {
  tags: Array<string>
  marginTop?: SpaceProps["marginTop"]
}

export const Tags: React.FC<Tags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="outline" colorScheme="gray" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}
