import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@chakra-ui/react";
export const ErrorPage = ({ className }) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (_jsxs("div", { className: `errorPage ${className}`, children: [_jsx("p", { children: "An error has occurred" }), _jsx(Button, { onClick: reloadPage, children: "Refresh Page" })] }));
};
