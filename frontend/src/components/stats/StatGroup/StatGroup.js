import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
// import { useSelector } from "react-redux";
import { StatsCard } from "../Stat/StatCard";
export function StatGroup(props) {
    // const metaProducts = useSelector((state) => state.product.metadataProducts);
    const { statsProducts, statsBrands, statsCategories } = props;
    return (_jsx(Box, { maxW: "7xl", mx: "auto", pt: 5, px: { base: 2, sm: 12, md: 17 }, children: _jsxs(SimpleGrid, { columns: { base: 1, md: 3 }, spacing: { base: 5, lg: 8 }, children: [_jsx(StatsCard, { title: "Nr Products", stat: "238", icon: _jsx(BsPerson, { size: "3em" }) }), _jsx(StatsCard, { title: "Nr Brands", stat: "18", icon: _jsx(FiServer, { size: "3em" }) }), _jsx(StatsCard, { title: "Nr Categories", stat: "23", icon: _jsx(GoLocation, { size: "3em" }) })] }) }));
}
