//sdfsd
import { makeRoot } from "iti"
import { initiativesDataProvider, InitiativesDataStore } from "./charity-data"

export function getRootContainer() {
  return makeRoot()
    .add({
      initiativesDataDTO: async () => await initiativesDataProvider(),
    })
    .add((ctx) => ({
      initiativesDataStore: async () =>
        new InitiativesDataStore(await ctx.initiativesDataDTO),
    }))
}
export type RootContainer = ReturnType<typeof getRootContainer>
