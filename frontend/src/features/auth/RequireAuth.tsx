import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface RequireAuthProps {
    allowedRole : string
}

const RequireAuth = (props: RequireAuthProps) => {
    const { allowedRole } = props
    const location = useLocation()
    const { role } = useAuth()

    const content = (
        role === allowedRole 
        ? <Outlet />
        : <Navigate to="/login"  state={{ from: location }} replace/>
    )

    return content
}

export default RequireAuth