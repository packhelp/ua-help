//sdfsd
import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import { fetch as fetchOG } from "fetch-opengraph"
const axiosInstance = axios.create({
  baseURL: "https://api.apispreadsheets.com/data",
})

const endpoints = {
  mainTest: "/Cc7q5barUbUEjlCE/", //  test url sheets api
  demoMain: "/d9YLBhNzIAXeH9tJ/", // Demo main
  prod: {
    operations: "JlnuK6D6SCSElO6D",
  },
}

export interface InitiativesDTO {
  public: boolean
  date: number | string
  fullName: string
  url: string
  phoneNumber: string
  email: string
  helpKind: string
  info: string
  areaCovered: string
  image?: string
}

export async function initiativesDataProvider(): Promise<InitiativesDTO[]> {
  const res = await axiosInstance.get(endpoints.prod.operations)
  const resData = res.data.data
  for (const charity of resData) {
    if (!charity.url) {
      continue
    }
    try {
      const data = await fetchOG(charity.url)
      charity["image"] = data["image"] || data["og:image"] || null
    } catch {}
  }
  return resData
}

export class InitiativesDataStore {
  constructor(private readonly _initiativesData: InitiativesDTO[]) {}

  get publicCharityData() {
    return this._initiativesData.filter((el) => el.public === true)
  }
}
