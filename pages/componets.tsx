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
import { getRootContainer } from "./services/_root-container"
import { RootContext, useContainer } from "./services/_continer.hooks"

export const RootContainerWrapper = React.memo(
  function RootContainerWrapperInside({ children }: { children: ReactNode }) {
    const store = useMemo(() => getRootContainer(), [])
    return <RootContext.Provider value={store}>{children}</RootContext.Provider>
  }
)

export const CharityDataTable = () => {
  const [charitData] = useContainer().charityData
  if (!charitData) return null
  const pub = charitData.publicCharityData

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
