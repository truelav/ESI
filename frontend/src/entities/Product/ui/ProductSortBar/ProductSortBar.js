import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductSortItem } from "../ProductSortItem/ProductSortItem";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
export const ProductSortBar = () => {
    const selectedSort = useSelector(state => state.sort.selectedSort);
    const sortList = useSelector(state => state.sort.sortList);
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(14, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: "Sort By: " }) }), sortList.map((sortItem) => (_jsx(ProductSortItem, { sortItem: sortItem, selectedSort: selectedSort }, sortItem))), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: "" }) })] }) }));
};
