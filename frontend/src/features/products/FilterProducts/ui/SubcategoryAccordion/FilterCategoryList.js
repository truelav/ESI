import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button, Box } from "@chakra-ui/react";
export const FilterCategoriesList = (props) => {
    const { category, subcategories, selectedCategories, handleToggleCategory } = props;
    const isCategorySelected = selectedCategories.includes(category);
    return (_jsx(Box, { bg: '', p: 4, children: _jsxs(Button, { colorScheme: isCategorySelected ? "blue" : "gray", color: isCategorySelected ? "white" : "black", onClick: () => handleToggleCategory({ category, subcategories }), children: [isCategorySelected ? "Deselect" : "Select", " All ", category] }) }));
};
