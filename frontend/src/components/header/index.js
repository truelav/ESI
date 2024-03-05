import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
export default function Header() {
    // const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, _, removeCookie] = useCookies(["authToken"]);
    const { isAdmin, isUser, id } = useAuth();
    const logOut = () => {
        if (cookies.authToken) {
            removeCookie("authToken", { path: "/" });
        }
        navigate("/login");
        return;
    };
    let content = _jsx("div", {});
    if (isAdmin) {
        content = (_jsx(_Fragment, { children: _jsx(AdminNav, { logOut: logOut, id: id }) }));
    }
    else if (isUser) {
        content = (_jsx(_Fragment, { children: _jsx(UserNav, { logOut: logOut, id: id }) }));
    }
    else {
        content = (_jsx(_Fragment, { children: _jsx(GuestNav, {}) }));
    }
    return _jsx(_Fragment, { children: content });
}
