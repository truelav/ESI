import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem } from "@chakra-ui/react";
import CardComponent from "../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../shared/ui/Product/Card/CardText";
export const DashProductListHead = () => {
    return (_jsx(CardComponent, { children: _jsxs(Grid, { templateColumns: 'repeat(12, 1fr)', gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Select" }) }), _jsx(GridItem, { colSpan: 10, children: _jsxs(Grid, { templateColumns: 'repeat(6, 1fr)', gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Prod Image" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Brand" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Model" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Status" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Quantity" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Updated At" }) })] }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: "Delete" }) })] }) }));
};
