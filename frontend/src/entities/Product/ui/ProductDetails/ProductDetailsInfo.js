import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardBody, Stack, Divider, CardFooter } from "@chakra-ui/react";
import AddToCart from "../../../../features/cart/addToCart/AddToCartFeature";
import { ProductBulletList } from "../../../../shared/ui/Product/ProductBulletList/ProductBulletList";
import { ProductDetailsInfoItem } from "./ProductDetailsInfoItem";
export const ProductDetailsInfo = ({ product }) => {
    const { price, description, brand, model, upc, category, quantity } = product;
    return (_jsx(_Fragment, { children: _jsxs(Card, { maxW: 'lg', children: [_jsxs(CardBody, { children: [_jsxs(Stack, { mt: '6', spacing: '3', children: [_jsx(ProductDetailsInfoItem, { productInfo: brand, element: "HEADING", size: "lg" }), _jsx(ProductDetailsInfoItem, { productInfo: model, element: "HEADING", size: "lg", info: "Model: " }), _jsx(ProductDetailsInfoItem, { productInfo: description, element: "TEXT", size: "lg" }), _jsx(ProductDetailsInfoItem, { productInfo: category, element: "TEXT", size: "lg", info: "Category: " }), _jsx(ProductDetailsInfoItem, { productInfo: price, element: "TEXT", size: "lg", info: "Price: $" }), _jsx(ProductDetailsInfoItem, { productInfo: quantity, element: "TEXT", size: "lg", info: "Quantity: " }), _jsx(ProductDetailsInfoItem, { productInfo: upc, element: "TEXT", size: "lg", info: "UPC: " })] }), _jsx(ProductBulletList, {})] }), _jsx(Divider, {}), _jsx(CardFooter, { children: _jsx(AddToCart, { product: product }) })] }) }));
};
