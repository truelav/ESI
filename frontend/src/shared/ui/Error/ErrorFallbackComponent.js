import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Container, Heading } from "@chakra-ui/react";
import ErrorText from "./ErrorText";
export const ErrorFallbackComponent = ({ error, resetErrorBoundary }) => {
    return (_jsxs(Container, { children: [_jsx(Heading, { children: "Something went wrong" }), _jsx(ErrorText, { errorMessage: error.message }), _jsx(Button, { color: "blue", onClick: resetErrorBoundary, children: "Try Again" })] }));
};
