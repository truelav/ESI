import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from "@chakra-ui/react";
import { OrderListHeader } from "../OrderListHeader/OrderListHeader";
import { OrderListItem } from "../OrderListItem/OrderListItem";
export const OrderList = (props) => {
    const { orders } = props;
    let orderListContent = _jsx(_Fragment, {});
    if (orders.length > 0) {
        orderListContent = (_jsx(_Fragment, { children: orders.map((order) => (_jsx(OrderListItem, { order: order }, order._id))) }));
    }
    if (orders.length === 0) {
        orderListContent = (_jsx(Box, { my: 8, children: _jsx(Text, { children: "No Orders Yet, please add products to cart and submit interested products as an order so we can get back to you with more details." }) }));
    }
    return (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Orders History: " }), _jsxs("div", { children: [_jsx(OrderListHeader, {}), orderListContent] })] }));
};
