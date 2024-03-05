import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Image, Box, Flex } from "@chakra-ui/react";
import CardComponent, { CardVariants, } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import fallback_image from "/fallback_image.jpeg";
import AddToCart from "../../../../features/cart/addToCart/AddToCartFeature";
export const ProductListItem = memo((props) => {
    const { product } = props;
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2, children: _jsx(Image, { src: product?.images, fallbackSrc: fallback_image, alt: product?.brand, boxSize: "110px", objectFit: "contain" }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { fontSize: "xl", children: product?.brand }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.model }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { fontSize: "xl", children: product?.quantity }) }), _jsx(GridItem, { colSpan: 1, children: _jsxs(CardTextComponent, { children: ["$", product.price, ".00"] }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: product?.upc }) }), _jsx(GridItem, { colSpan: 2, children: _jsxs(Flex, { direction: "column", align: "center", justify: "space-evenly", children: [_jsx(Box, { p: 2, children: _jsx(Link, { to: `/products/${product?._id}`, children: _jsx(Button, { children: "Learn More" }) }) }), _jsx(Box, { p: 2, children: _jsx(AddToCart, { product: product }) })] }) })] }) }));
});
