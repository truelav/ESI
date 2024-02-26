import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ProductsLayout() {
    const { isAdmin, isUser } = useAuth();

    if (isAdmin || isUser) {
        return (
            <div className="dash_products_page_wrapper">
                <Outlet />
            </div>
        );
    }
    return (
        <>
            <h2>Unauthorized</h2>
        </>
    );
}
