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
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/DashboardPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { UserList } from "./features/users/ui/usersList/usersList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      {/* END HOME */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users">
          <Route index element={<UserList />} />
        </Route>
        <Route path="register">
          <Route index element={<RegistrationPage />} />
        </Route>
      </Route>
      <Route path="products">
        <Route index element={<ProductsPage />} />
        <Route path=":id">
          <Route index element={<ProductDetailsPage />} />
        </Route>
      </Route>
      {/* END DASHBOARD */}
      <Route path="products" element={<ProductsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
