import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertIcon, Button, Stack } from "@chakra-ui/react";
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { usePlaceOrderMutation } from "../../../app/api/apiSlice";
import { clearCart } from "../../../entities/Profile/model/profileSlice";
export const PlaceOrderFeature = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cart = useSelector((state) => state.profile.cart);
    const dispatch = useDispatch();
    const [placeOrder, { isLoading, error, isSuccess }] = usePlaceOrderMutation();
    const [cookies] = useCookies(["authToken"]);
    const user = jwtDecode(cookies.authToken);
    const order = { cart, user };
    const handlePlaceOrder = async () => {
        const result = await placeOrder(order);
        console.log(result);
        setTimeout(() => {
            dispatch(clearCart());
        }, 2000);
    };
    let content = _jsx(_Fragment, {});
    if (isSuccess) {
        content = (_jsxs(Alert, { status: 'success', variant: 'subtle', height: "200px", children: [_jsx(AlertIcon, {}), "Order sent to the server. Thank You!"] }));
    }
    if (error) {
        content = (_jsxs(Alert, { status: 'error', height: "200px", children: [_jsx(AlertIcon, {}), "There was an error processing your request, Refresh the page and try again."] }));
    }
    if (isLoading) {
        content = _jsx("div", { children: "...Is Loading" });
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(Stack, { children: content }), _jsx(Button, { colorScheme: "blue", size: "lg", fontSize: "md", rightIcon: _jsx(FaArrowRight, {}), onClick: handlePlaceOrder, children: "Send Order" })] }));
    }
    return content;
};
