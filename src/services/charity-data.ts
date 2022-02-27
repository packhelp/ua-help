//sdfsd
import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
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

export interface CharityDTO {
  public: boolean
  date: number | string
  fullName: string
  url: string
  phoneNumber: string
  email: string
  helpKind: string
  info: string
  areaCovered: string
}

export async function charityDataProvider(): Promise<CharityDTO[]> {
  const res = await axiosInstance.get(endpoints.prod.operations)
  return res.data.data
}

export class CharityDataStore {
  constructor(private readonly _charityData: CharityDTO[]) {}

  get publicCharityData() {
    return this._charityData.filter((el) => el.public === true)
  }
}
