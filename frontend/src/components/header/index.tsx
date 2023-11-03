import { useCookies } from "react-cookie";
import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["authToken"]);
  const { isAdmin, isUser } = useAuth();

  const logOut = () => {
    console.log(cookies);

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
