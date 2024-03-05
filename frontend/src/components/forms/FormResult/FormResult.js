import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon,
//     InfoIcon,
//     WarningIcon,
//     CloseIcon,
 } from "@chakra-ui/icons";
export const FormResult = (props) => {
    const { headlineText, bodyText, children } = props;
    return (_jsx(_Fragment, { children: _jsxs(Box, { textAlign: "center", py: 10, px: 6, children: [_jsx(CheckCircleIcon, { boxSize: "50px", color: "green.500" }), _jsx(Heading, { as: "h2", size: "xl", mt: 6, mb: 2, children: headlineText }), _jsx(Text, { color: "gray.500", children: bodyText }), children] }) }));
};
