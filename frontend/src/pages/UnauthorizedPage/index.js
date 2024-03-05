import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Box, Text, Heading } from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
export const UnauthorizedPage = () => {
    return (_jsx(_Fragment, { children: _jsx(Container, { children: _jsxs(Box, { textAlign: "center", py: 10, px: 6, children: [_jsx(WarningTwoIcon, { boxSize: '50px', color: 'orange.300' }), _jsx(Heading, { as: "h2", size: "xl", mt: 6, mb: 2, children: "Unauthorized Access" }), _jsxs(Text, { color: 'gray.500', children: ["You Are trying to acces some unauthorized content, ", _jsx(Link, { to: "login", children: "login" }), " please  or ", _jsx(Link, { to: "contact", children: "Contact Us" }), "."] })] }) }) }));
};
