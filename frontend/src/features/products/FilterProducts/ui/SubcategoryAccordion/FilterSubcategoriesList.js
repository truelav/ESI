import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Text } from "@chakra-ui/react";
export const FilterSubcategoriesList = (props) => {
    const { category, subcategories, selectedSubCategories, handleToggleSubcategory } = props;
    return (_jsx(_Fragment, { children: subcategories.map((subcategory) => (_jsx(Button, { isActive: selectedSubCategories.includes(subcategory), color: selectedSubCategories.includes(subcategory) ? "blue" : "black", onClick: () => handleToggleSubcategory({ category, subcategory }), children: _jsx(Text, { children: subcategory }) }, subcategory))) }));
};
