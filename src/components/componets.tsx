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
import { CharityDataStore } from "../services/charity-data"

interface CharityTableProps {
  charityData: CharityDataStore
}

export const CharityDataTable = ({ charityData }: CharityTableProps) => {
  const pub = charityData.publicCharityData

  return (
    <Table variant="simple">
      {/* <TableCaption>Charity List</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>URL</Th>
          <Th isNumeric>phoneNumer</Th>
        </Tr>
      </Thead>
      <Tbody>
        {pub.map((charity, idx) => (
          <Tr key={idx}>
            <Td>{charity.fullName}</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Name</Th>
          <Th>URL</Th>
          <Th isNumeric>phoneNumer</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
