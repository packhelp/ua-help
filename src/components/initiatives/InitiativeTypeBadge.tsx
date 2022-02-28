import react from "react"
import { Badge } from "@chakra-ui/react"
import { helpCategoryColor } from "../../services/help-category"

export interface InitiativeTypeBadgeProps {
  badgeName: string
}

export const InitiativeTypeBadge = ({
  badgeName,
}: InitiativeTypeBadgeProps) => {
  return (
    <Badge
      fontSize="0.5em"
      mr={1}
      mt={1}
      bgColor={helpCategoryColor(badgeName)}
    >
      {badgeName}
    </Badge>
  )
}
