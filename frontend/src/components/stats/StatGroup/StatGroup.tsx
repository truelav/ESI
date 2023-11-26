import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

// import { useSelector } from "react-redux";

import { StatsCard } from "../Stat/StatCard";

export function StatGroup(props) {
    // const metaProducts = useSelector((state) => state.product.metadataProducts);
    const { statsProducts, statsBrands, statsCategories } = props
    return (
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            {/* <chakra.h1
                textAlign={"center"}
                fontSize={"4xl"}
                py={10}
                fontWeight={"bold"}
            >
                Available Products in Store.
            </chakra.h1> */}
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
            >
                {/* <StatsCard
                    title={statsProducts.title}
                    stat={statsProducts.detail}
                    icon={<BsPerson size={"3em"} />}
                />
                <StatsCard
                    title={statsBrands.title}
                    stat={statsBrands.detail.}
                    icon={<FiServer size={"3em"} />}
                />
                <StatsCard
                    title={statsCategories.title}
                    stat={statsCategories.detail}
                    icon={<GoLocation size={"3em"} />}
                /> */}
                <StatsCard
                    title={"Nr Products"}
                    stat={"238"}
                    icon={<BsPerson size={"3em"} />}
                />
                <StatsCard
                    title={"Nr Brands"}
                    stat={"18"}
                    icon={<FiServer size={"3em"} />}
                />
                <StatsCard
                    title={"Nr Categories"}
                    stat={"23"}
                    icon={<GoLocation size={"3em"} />}
                />
            </SimpleGrid>
        </Box>
    );
}
