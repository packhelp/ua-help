import { helpCategory } from "../utils/help-categories"

export const helpCategoryConfig = (name: string) => {
  const loweredName = name.toLocaleLowerCase()
  const category = helpCategory.find((c) => {
    const idLowered = c.id.toLocaleLowerCase()
    const nameLowered = c.name.toLocaleLowerCase()

    return (
      idLowered.includes(loweredName) ||
      loweredName.includes(idLowered) ||
      nameLowered.includes(loweredName) ||
      loweredName.includes(nameLowered)
    )
  })

  return category
}

export const helpCategoryColor = (name: string) => {
  const nameTrimmed = name.trim()
  const config = helpCategoryConfig(nameTrimmed)
  if (!config) return "#bee3f8"

  return config.color
}
