import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
export function ProductPrice(value, opts = {}) {
    const { locale = 'en-US', currency = 'USD' } = opts;
    const formatter = new Intl.NumberFormat(locale, {
        currency,
        style: 'currency',
        maximumFractionDigits: 2,
    });
    return formatter.format(value);
}
export const PriceTag = (props) => {
    const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props;
    return (_jsxs(HStack, { spacing: "1", ...rootProps, children: [_jsx(Price, { isOnSale: !!salePrice, textProps: priceProps, children: ProductPrice(price, { currency }) }), salePrice && (_jsx(SalePrice, { ...salePriceProps, children: ProductPrice(salePrice, { currency }) }))] }));
};
const Price = (props) => {
    const { isOnSale, children, textProps } = props;
    const defaultColor = mode('gray.700', 'gray.400');
    const onSaleColor = mode('gray.400', 'gray.700');
    const color = isOnSale ? onSaleColor : defaultColor;
    return (_jsx(Text, { as: "span", fontWeight: "medium", color: color, textDecoration: isOnSale ? 'line-through' : 'none', ...textProps, children: children }));
};
const SalePrice = (props) => (_jsx(Text, { as: "span", fontWeight: "semibold", color: mode('gray.800', 'gray.100'), ...props }));
