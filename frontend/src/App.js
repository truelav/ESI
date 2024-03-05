import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, } from "react-router-dom";
// LAYOUTS
import MainLayout from "./components/layouts/main";
import DashboardLayout from "./components/layouts/dashboard";
import ProductsLayout from "./components/layouts/userProducts";
import ProfileLayout from "./components/layouts/profile";
// PAGES
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import DashUsersPage from "./pages/DashboardPage/DashUsersPage/DashUsersPage";
import DashProductsPage from "./pages/DashboardPage/DashProductsPage/DashProductsPage";
import DashProductDetailsPage from "./pages/DashboardPage/DashProductDetailsPage/DashProductDetailsPage";
import DashAddSingleProduct from "./pages/DashboardPage/DashAddSingleProduct/DashAddSingleProduct";
import DashOrders from "./pages/DashboardPage/DashOrders/DashOrdersPage";
import DashInventory from "./pages/DashboardPage/DashInventory/DashInventory";
import DashPresentationPage from "./pages/DashboardPage/DashPresentationsPage/DashPresentationPage";
import CartPage from "./pages/CartPage/CartPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
const router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: "/", element: _jsx(MainLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsxs(Route, { path: "dashboard", element: _jsx(DashboardLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "users", children: _jsx(Route, { index: true, element: _jsx(DashUsersPage, {}) }) }), _jsx(Route, { path: "orders", children: _jsx(Route, { index: true, element: _jsx(DashOrders, {}) }) }), _jsx(Route, { path: "inventory", children: _jsx(Route, { index: true, element: _jsx(DashInventory, {}) }) }), _jsx(Route, { path: "presentation", children: _jsx(Route, { index: true, element: _jsx(DashPresentationPage, {}) }) }), _jsxs(Route, { path: "products", children: [_jsx(Route, { index: true, element: _jsx(DashProductsPage, {}) }), _jsx(Route, { path: ":id", children: _jsx(Route, { index: true, element: _jsx(DashProductDetailsPage, {}) }) }), _jsx(Route, { path: "addSingleProduct", children: _jsx(Route, { index: true, element: _jsx(DashAddSingleProduct, {}) }) })] })] }), _jsxs(Route, { path: "products", element: _jsx(ProductsLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(ProductsPage, {}) }), _jsx(Route, { path: ":id", children: _jsx(Route, { index: true, element: _jsx(ProductDetailsPage, {}) }) })] }), _jsx(Route, { path: "profile/:id", element: _jsx(ProfileLayout, {}), children: _jsx(Route, { index: true, element: _jsx(ProfilePage, {}) }) }), _jsx(Route, { path: "login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "signup", element: _jsx(SignupPage, {}) }), _jsx(Route, { path: "contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] })));
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;
