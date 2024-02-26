import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";


export interface LogoutProps {
  logOut: () => void
}

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["authToken"]);
  const { isAdmin, isUser } = useAuth();

  const logOut = () => {
    if (cookies.authToken) {
      removeCookie("authToken", { path: "/" });
    }

    navigate("/login");
    return;
  };

  let content = <div></div>;

  if (isAdmin) {
    content = (
      <>
        <AdminNav logOut={logOut} />
      </>
    );
  } else if (isUser) {
    content = (
      <>
        <UserNav logOut={logOut} />
      </>
    );
  } else {
    content = (
      <>
        <GuestNav />
      </>
    );
  }

  return <>{content}</>;
}
