import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CartListHeader } from "../cartListHeader/CartListHeader";
import { CartListItem } from "../cartProductListItem/CartProductListItem";
export const CartProductList = (props) => {
    const { products } = props;
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx(CartListHeader, {}) }), _jsx("div", { children: products.map((product) => (_jsx(CartListItem, { product: product }, product._id))) })] }));
};
