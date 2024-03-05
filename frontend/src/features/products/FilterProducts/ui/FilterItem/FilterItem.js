import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
import { SubcategoryAccordion } from "../SubcategoryAccordion/SubcategoryAccordion";
const FilterItem = (props) => {
    const { filterItem } = props;
    return (_jsx(Box, { margin: 2, children: _jsx(SubcategoryAccordion, { category: filterItem.name, subcategories: filterItem.subcategories }) }));
};
export default FilterItem;
