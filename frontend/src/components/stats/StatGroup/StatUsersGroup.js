import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { StatsCard } from "../Stat/StatCard";
export function StatUserGroup() {
    return (_jsx(Box, { maxW: "7xl", mx: "auto", pt: 5, px: { base: 2, sm: 12, md: 17 }, children: _jsxs(SimpleGrid, { columns: { base: 1, md: 3 }, spacing: { base: 5, lg: 8 }, children: [_jsx(StatsCard, { title: "Nr Users", stat: "5", icon: _jsx(BsPerson, { size: "3em" }) }), _jsx(StatsCard, { title: "Nr Active", stat: "3", icon: _jsx(FiServer, { size: "3em" }) }), _jsx(StatsCard, { title: "Nr Inactive", stat: "2", icon: _jsx(GoLocation, { size: "3em" }) })] }) }));
}
