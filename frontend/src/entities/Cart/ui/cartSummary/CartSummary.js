import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Heading, Stack, Text, useColorModeValue as mode, } from "@chakra-ui/react";
import { ProductPrice } from "../../../Product/ui/ProductPrice/ProductPrice";
const OrderSummaryItem = (props) => {
    const { label, value, children } = props;
    return (_jsxs(Flex, { justify: "space-between", fontSize: "sm", children: [_jsx(Text, { fontWeight: "medium", color: mode("gray.600", "gray.400"), children: label }), value ? _jsx(Text, { fontWeight: "medium", children: value }) : children] }));
};
export const CartOrderSummary = (props) => {
    const { products } = props;
    return (_jsxs(Stack, { spacing: "8", borderWidth: "1px", rounded: "lg", padding: "8", width: "full", children: [_jsx(Heading, { size: "md", children: "Order Summary" }), _jsxs(Stack, { spacing: "6", children: [_jsx(OrderSummaryItem, { label: "Total Products", value: ProductPrice(products.length) }), _jsxs(Flex, { justify: "space-between", children: [_jsx(Text, { fontSize: "lg", fontWeight: "semibold", children: "Total" }), _jsx(Text, { fontSize: "xl", fontWeight: "extrabold", children: ProductPrice(products.length) })] })] })] }));
};
