import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
export const OrderListHeader = () => {
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(Box, { children: "Check" }) }), _jsx(GridItem, { colSpan: 10, children: _jsxs(Grid, { templateColumns: "repeat(6, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Order Id" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Date" }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: "User Email" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Products X" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Total Amount" }) })] }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Delete" }) })] }) }));
};
