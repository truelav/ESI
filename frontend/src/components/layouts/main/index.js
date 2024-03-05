import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "../../header/index";
import Footer from "../../footer";
import './styles.css';
export default function MainLayout() {
    return (_jsxs("div", { className: "site-wrapper", children: [_jsx(Header, {}), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
