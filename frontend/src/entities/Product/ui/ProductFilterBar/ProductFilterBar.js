import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from "@chakra-ui/react";
import ProductFilterItem from "../ProductFilterItem/ProductFilterItem";
export const ProductFilterBar = (props) => {
    const { filterBy, filterItems, setFilterBy } = props;
    console.log(filterItems);
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { children: "Filter By:" }), filterItems.map((filterItem) => (_jsx(ProductFilterItem, { filterItem: filterItem, filterBy: filterBy, setFilterBy: setFilterBy }, filterItem)))] }));
};
