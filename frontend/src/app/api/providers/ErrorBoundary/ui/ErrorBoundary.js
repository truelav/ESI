import { jsx as _jsx } from "react/jsx-runtime";
import React, { Suspense } from "react";
import { ErrorPage } from "../../../../../widgets/ErrorPage/ui/ErrorPage";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return (_jsx(Suspense, { fallback: "Some error occured, errorPage", children: _jsx(ErrorPage, {}) }));
        }
        return children;
    }
}
export default ErrorBoundary;
