import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

// LAYOUTS
import MainLayout from "./components/layouts/main";
import DashboardLayout from "./components/layouts/dashboard";

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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* END HOME */}
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="users">
                    <Route index element={<DashUsersPage />} />
                </Route>

                <Route path="orders">
                    <Route index element={<DashOrders />} />
                </Route>

                <Route path="inventory">
                    <Route index element={<DashInventory />} />
                </Route>

                <Route path="presentation">
                    <Route index element={<DashPresentationPage />} />
                </Route>

                <Route path="products">
                    <Route index element={<DashProductsPage />} />

                    <Route path=":id">
                        <Route index element={<DashProductDetailsPage />} />
                    </Route>

                    <Route path="addSingleProduct">
                        <Route index element={<DashAddSingleProduct />} />
                    </Route>
                </Route>
            </Route>
            {/* END DASHBOARD */}

            <Route path="products">
                <Route index element={<ProductsPage />} />
                <Route path=":id">
                    <Route index element={<ProductDetailsPage />} />
                </Route>
            </Route>

            <Route path="profile" element={<ProfilePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />

            <Route path="contact" element={<ContactPage />} />

            <Route path="cart" element={<CartPage />} />

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
