import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

import { useSelector } from "react-redux";

import { StatsCard } from "../Stat/StatCard";

export function StatGroup() {
    const totalProducts = useSelector((state) => state.product.totalProducts);

    return (
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={"center"}
                fontSize={"4xl"}
                py={10}
                fontWeight={"bold"}
            >
                Available Products in Store.
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
            >
                <StatsCard
                    title={"Total Products"}
                    stat={totalProducts}
                    icon={<BsPerson size={"3em"} />}
                />
                <StatsCard
                    title={"Servers"}
                    stat={"1,000"}
                    icon={<FiServer size={"3em"} />}
                />
                <StatsCard
                    title={"Datacenters"}
                    stat={"7"}
                    icon={<GoLocation size={"3em"} />}
                />
            </SimpleGrid>
        </Box>
    );
}
