import React, { useState, useEffect } from "react"
import {
    Flex,
    Box,
    Badge,
    Text,
    SimpleGrid,
    Link,
} from "@chakra-ui/react"
import { InitiativesDTO } from "../../services/charity-data"
import { Locales, translations } from "../../../src/utils/translations"
import { ExternalLinkIcon } from "@chakra-ui/icons"

type InitiativesListTileProps = {
    data: InitiativesDTO[]
    locale: Locales
}

export const InitiativesList = (props: InitiativesListTileProps) => {
    const { data, locale } = props
    const [isNavigatorAvailable, setNavigatorAvailable] = useState(false);
    useEffect(() => {
        if (navigator) {
            setNavigatorAvailable(true);
        }
    }, []);

    const onShareClick = async (url: string) => {
        if (!isNavigatorAvailable) {
            return
        }

        try {
            await navigator.share({ url: url })
        } catch (e) {
            console.warn(e)
        }
    }
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="2em" mt={4}>
            {data.map((charity, idx) => (
                <Box key={idx} p="5" maxW="320px" borderWidth="1px">
                    <Box
                        borderRadius={5}
                        height={156}
                        backgroundColor="gray.200"
                        // background={[
                        //   "linear-gradient(180deg, #3a75c4 50%, #f9dd16 50%)",
                        // ]} # ukrainian flag, but I'm not sure if it's right to use it as too many pages misses images and it might be overwhelming
                        backgroundImage={charity.image}
                        backgroundSize={["cover"]}
                        backgroundPosition={["center"]}
                    />
                    <div style={{ lineHeight: "1em", marginTop: "0.5em" }}>
                        {charity.helpKind.split(",").map((badge, idx) => (
                            <Badge
                                fontSize="0.5em"
                                mr={1}
                                mt={1}
                                key={idx}
                                colorScheme="blue"
                            >
                                {badge}
                            </Badge>
                        ))}
                    </div>
                    <Text
                        mt={2}
                        fontSize="l"
                        fontWeight="semibold"
                        lineHeight="short"
                        textTransform="uppercase"
                    >
                        {charity.fullName}
                    </Text>
                    <Text mb={2} fontSize="sm" fontWeight="bold" color="blue.800">
                        {charity.areaCovered}
                    </Text>
                    <Text fontSize="xs">
                        <SimpleGrid
                            columns={2}
                            spacing="1em"
                            mb={2}
                            spacingY="4px"
                            templateColumns="60px auto;"
                        >
                            {charity.url && (
                                <>
                                    <b>{translations[locale]["generic"]["website"]}</b>
                                    <Flex justifyContent="space-around" alignItems="center">
                                        <Link href={charity.url}>
                                            {translations[locale]["generic"]["go-to-page"]}
                                        </Link>
                                        {isNavigatorAvailable && (
                                            <Flex cursor="pointer" alignItems="center" onClick={() => onShareClick(charity.url)}>
                                                {translations[locale]["generic"]["share-link"]}
                                            </Flex>
                                        )}
                                    </Flex>
                                </>
                            )}
                            {charity.phoneNumber && (
                                <>
                                    <b>
                                        {translations[locale]["generic"]["phone"]}
                                    </b> <span>{charity.phoneNumber}</span>
                                </>
                            )}
                            {charity.email && (
                                <>
                                    <b>
                                        {translations[locale]["generic"]["email"]}
                                    </b>
                                    <Link href={`mailto:${charity.email}`}>
                                        {charity.email}
                                    </Link>
                                </>
                            )}
                        </SimpleGrid>
                        {charity.info}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    )
}