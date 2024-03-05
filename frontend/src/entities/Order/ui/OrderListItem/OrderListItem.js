import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Button, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useDeleteOrdersMutation } from "../../../../app/api/apiSlice";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
export const OrderListItem = memo(({ order }) => {
    console.log(order);
    const [cookies] = useCookies(["authToken"]);
    const user = jwtDecode(cookies.authToken);
    const [deleteOrders, { isLoading, isError, isSuccess }] = useDeleteOrdersMutation();
    if (isError) {
        return _jsx("div", { children: "...Some Error Has Occured with this Product" });
    }
    if (isLoading) {
        return _jsx("div", { children: "...Loading" });
    }
    if (isSuccess) {
        return _jsx("div", { children: "Deleted" });
    }
    return (_jsx(CardComponent, { cardVariant: CardVariants.outline, additionalClassNames: "Dash_ProductListItem", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(Box, { children: _jsx(Checkbox, { size: "lg", isChecked: false, children: "Check" }) }) }), _jsx(GridItem, { colSpan: 10, children: _jsx(Link, { to: `/dashboard/orders/${order?._id}`, children: _jsxs(Grid, { templateColumns: "repeat(6, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: order?._id?.slice(10) }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: order?.updatedAt?.slice(0, 10) }) }), _jsx(GridItem, { colSpan: 2, children: _jsx(CardTextComponent, { children: order?.user?.userEmail }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: order?.products?.length }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(CardTextComponent, { children: order?.orderSummary?.totalAmount }) })] }) }) }), _jsx(GridItem, { colSpan: 1, children: _jsx(Button, { onClick: () => deleteOrders({ user, order }), children: _jsx(FaTrash, {}) }) })] }) }));
});
