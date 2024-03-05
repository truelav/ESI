import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function NotFound() {
    return (_jsxs("div", { className: "not-found-container", children: [_jsx("h1", { children: "Sorry, the page you were looking for was not found." }), _jsx(Link, { to: "/", className: "link-button", children: "Return to Home" })] }));
}
