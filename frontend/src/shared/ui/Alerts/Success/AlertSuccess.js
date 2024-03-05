import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Alert, AlertIcon, AlertTitle, Box, AlertDescription, CloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const AlertSuccess = ({ isOpen, setShowSuccessAlert }) => {
    let content;
    if (isOpen) {
        content = (_jsxs(Alert, { status: 'success', children: [_jsx(AlertIcon, {}), _jsxs(Box, { children: [_jsx(AlertTitle, { children: "Success!" }), _jsxs(AlertDescription, { children: ["The Product was added to Cart", _jsx(Link, { to: "cart", children: "Go to Cart" })] })] }), _jsx(CloseButton, { alignSelf: 'flex-start', position: 'relative', right: -1, top: -1, onClick: () => setShowSuccessAlert(false) })] }));
    }
    else {
        content = _jsx(_Fragment, {});
    }
    return (_jsx(_Fragment, { children: content }));
};
