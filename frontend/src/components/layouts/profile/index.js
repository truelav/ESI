import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Container } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
export default function ProfileLayout() {
    const { isAdmin, isUser, id } = useAuth();
    const profileId = useParams().id;
    const isHisOwnProfile = id === profileId;
    console.log(isHisOwnProfile);
    if (isAdmin || (isUser && isHisOwnProfile)) {
        return (_jsx(Box, { mx: 8, children: _jsx("div", { className: "dash_products_page_wrapper", children: _jsx(Outlet, {}) }) }));
    }
    return (_jsx(_Fragment, { children: _jsx(Container, { children: _jsx("h2", { children: "Unauthorized" }) }) }));
}
