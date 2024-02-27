import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";


export interface LogoutProps {
  logOut: () => void
  id: string
}

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["authToken"]);
  const { isAdmin, isUser, id } = useAuth();
  console.log('header :', id)
  
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
        <AdminNav logOut={logOut} id={id}/>
      </>
    );
  } else if (isUser) {
    content = (
      <>
        <UserNav logOut={logOut} id={id}/>
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
