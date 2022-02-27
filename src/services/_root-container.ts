//sdfsd
import { makeRoot } from "iti"
import { charityDataProvider, CharityData } from "./charity-data"

export function getRootContainer() {
  return makeRoot()
    .add({
      charityDataDTO: async () => await charityDataProvider(),
    })
    .add((ctx) => ({
      charityData: async () => new CharityData(await ctx.charityDataDTO),
    }))
}
export type RootContainer = ReturnType<typeof getRootContainer>
