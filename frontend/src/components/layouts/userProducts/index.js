import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
export default function ProductsLayout() {
    const { isAdmin, isUser } = useAuth();
    console.log(isUser, isAdmin);
    if (isAdmin || isUser) {
        return (_jsx("div", { className: "dash_products_page_wrapper", children: _jsx(Outlet, {}) }));
    }
    return (_jsx(_Fragment, { children: _jsx("h2", { children: "Unauthorized" }) }));
}
