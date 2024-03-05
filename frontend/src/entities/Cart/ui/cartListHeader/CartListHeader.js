import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import CardComponent, { CardVariants, } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import { clearCart } from "../../../Profile/model/profileSlice";
export const CartListHeader = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2 }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: "Brand" }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: " Model " }) }), _jsx(GridItem, { colSpan: 1 }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: " Price " }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: " Product UPC " }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(Button, { variant: "solid", colorScheme: "red", onClick: handleClearCart, children: "Clear Cart" }) })] }) }));
};
