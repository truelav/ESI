import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import useAuth from "../../../hooks/useAuth";
import Sidebar from "../../sidebar";
export default function DashboardLayout() {
    const { isAdmin } = useAuth();
    if (isAdmin) {
        return (_jsx("div", { className: "dashboard-wrapper", children: _jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 2, children: _jsx(Sidebar, {}) }), _jsx(GridItem, { colSpan: 10, className: "dashboard-body-wrapper", children: _jsx(Outlet, {}) })] }) }));
    }
    return (_jsx(_Fragment, { children: _jsx("h2", { children: "Unauthorized" }) }));
}
