import React, { ReactNode, useContext, useMemo } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { CharityDataStore, CharityDTO } from "../services/charity-data"

interface CharityTableProps {
  charityDataDTO: CharityDTO[]
}

const TableHederRow = () => (
  <Tr>
    <Th>Name</Th>
    <Th>Website</Th>
    <Th isNumeric>phoneNumer</Th>
    <Th isNumeric>email</Th>
    <Th>Help Kind</Th>
    <Th>Area Covered</Th>
    <Th>Info</Th>
  </Tr>
)

export const CharityDataTable = ({ charityDataDTO }: CharityTableProps) => {
  const cds = new CharityDataStore(charityDataDTO)
  const pub = cds.publicCharityData

  return (
    <Table variant="simple">
      {/* <TableCaption>Charity List</TableCaption> */}
      <Thead>
        <TableHederRow />
      </Thead>
      <Tbody>
        {pub.map((charity, idx) => (
          <Tr key={idx}>
            <Td>{charity.fullName}</Td>
            <Td>{charity.url ? <a href={charity.url}>link</a> : null} </Td>
            <Td isNumeric>
              {charity.phoneNumber ? charity.phoneNumber : null}
            </Td>
            <Td isNumeric>{charity.email ? charity.email : null}</Td>
            <Td>{charity.helpKind}</Td>
            <Td>{charity.areaCovered}</Td>
            <Td>{charity.info}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <TableHederRow />
      </Tfoot>
    </Table>
  )
}
