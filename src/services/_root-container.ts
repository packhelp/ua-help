//sdfsd
import { makeRoot } from "iti"
import { charityDataProvider, CharityDataStore } from "./charity-data"

export function getRootContainer() {
  return makeRoot()
    .add({
      charityDataDTO: async () => await charityDataProvider(),
    })
    .add((ctx) => ({
      charityDataStore: async () =>
        new CharityDataStore(await ctx.charityDataDTO),
    }))
}
export type RootContainer = ReturnType<typeof getRootContainer>
