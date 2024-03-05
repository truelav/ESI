import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem } from "@chakra-ui/react";
import CardComponent, { CardVariants, } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
export const ProductListItemHeader = () => {
    const product = {
        _id: "00000000",
        description: "description",
        images: "image",
        brand: "brand",
        model: "model",
        price: "price",
        quantity: "",
        upc: "upc",
    };
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 3, children: _jsx(CardTextComponent, { children: product?.images }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.brand }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.model }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: product?.price }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.upc }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: "" }) })] }) }));
};
