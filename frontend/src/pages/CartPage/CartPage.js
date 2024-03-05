import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartProductList } from "../../entities/Cart/ui/cartProductList/CartProductList";
import { CartOrderSummary } from "../../entities/Cart/ui/cartSummary/CartSummary";
import { PlaceOrderFeature } from "../../features/cart/PlaceOrderFeatures/PlaceOrderFeature";
const CartPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const profile = useSelector((state) => state.profile);
    const { cart, user } = profile;
    let cartContent = _jsx(_Fragment, {});
    if (cart.length === 0) {
        cartContent = (_jsx(_Fragment, { children: _jsxs(Box, { children: [_jsx(Heading, { children: "The Cart is Empty" }), _jsx(Text, { children: "Please go to products add the items you are interested in" })] }) }));
    }
    else {
        cartContent = (_jsxs(_Fragment, { children: [_jsx(CartProductList, { products: cart }), _jsx(CartOrderSummary, { products: cart }), _jsx(PlaceOrderFeature, {})] }));
    }
    return (_jsx(_Fragment, { children: _jsx(Container, { maxW: "full", minH: "700px", mt: "100px", centerContent: true, overflow: "hidden", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsxs(GridItem, { colSpan: 12, children: [_jsx(Heading, { children: "My Cart" }), _jsx(Text, { children: user?.username })] }), _jsx(GridItem, { colSpan: 12, children: cartContent })] }) }) }));
};
export default CartPage;
