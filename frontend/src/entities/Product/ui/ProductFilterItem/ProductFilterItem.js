import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Text, Box } from "@chakra-ui/react";
const ProductFilterItem = (props) => {
    const { filterItem, filterBy, setFilterBy } = props;
    const isSelected = filterBy === filterItem;
    return (_jsx(Box, { margin: 2, children: _jsx(Button, { color: isSelected ? "green" : "blue", onClick: () => setFilterBy(filterItem), children: _jsx(Text, { children: filterItem }) }) }));
};
export default ProductFilterItem;
