import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const RequireAuth = (props) => {
    const { allowedRole } = props;
    const location = useLocation();
    const { role } = useAuth();
    const content = (role === allowedRole
        ? _jsx(Outlet, {})
        : _jsx(Navigate, { to: "/login", state: { from: location }, replace: true }));
    return content;
};
export default RequireAuth;
