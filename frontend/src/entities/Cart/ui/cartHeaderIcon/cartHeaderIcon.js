import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdShoppingCart } from 'react-icons/md';
export const CartHeaderIcon = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
    // @ts-ignore 
    const products = useSelector((state) => state.profile.cart);
    const isCartEmpty = (products.length === 0);
    const cartItems = products.length;
    return (_jsx(Link, { to: "/cart", children: _jsxs("div", { className: "cart", children: [_jsx("span", { className: "cart-icon", children: _jsx(MdShoppingCart, { size: 32 }) }), _jsxs("span", { className: !isCartEmpty ? "count" : "", children: [!isCartEmpty ? cartItems : "", " "] })] }) }));
};
