import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Text } from "@chakra-ui/react";
import { useGetAllOrdersQuery } from "../../../app/api/apiSlice";
import { OrderList } from "../../../entities/Order/ui/OrderList/OrderList";
function DashOrders() {
    const { data: ordersData, isLoading, isSuccess, isError, error, } = useGetAllOrdersQuery();
    let content = (_jsx("div", {}));
    if (isLoading) {
        return (_jsx("p", { children: "Loading.." }));
    }
    if (isError) {
        return _jsxs("p", { className: "errmsg", children: ["No Users found ", JSON.stringify(error)] });
    }
    if (isSuccess) {
        content = (_jsxs("div", { children: [_jsx(Container, { children: _jsx(Text, { children: " Welcome to Orders Page" }) }), _jsx(OrderList, { orders: ordersData })] }));
    }
    return content;
}
export default DashOrders;
