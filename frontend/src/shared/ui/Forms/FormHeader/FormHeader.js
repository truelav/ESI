import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
export const FormHeader = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    let content = _jsx(_Fragment, {});
    if (pathname === "/login") {
        content = (_jsxs(Stack, { spacing: { base: "2", md: "3" }, textAlign: "center", children: [_jsx(Heading, { size: { base: "xs", md: "sm" }, children: "Don't have an account?" }), _jsx(Link, { to: "/signup", children: _jsx(Button, { children: _jsx(Text, { color: "fg.muted", children: "Go To Signup" }) }) })] }));
    }
    else if (pathname === "/signup") {
        content = (_jsxs(Stack, { spacing: { base: "2", md: "3" }, textAlign: "center", children: [_jsx(Heading, { size: { base: "xs", md: "sm" }, children: "Your account is authenticated?" }), _jsx(Link, { to: "/login", children: _jsx(Button, { children: _jsx(Text, { color: "fg.muted", children: "Go To Login" }) }) })] }));
    }
    return (_jsx(Stack, { spacing: "6", children: content }));
};
