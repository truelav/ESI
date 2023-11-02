import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/slice/authSlice";

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const {isAdmin, isUser, username} = useAuth()
  const accessToken = useSelector(selectCurrentToken)
  console.log(accessToken)

  let content = <div></div>

  if(isAdmin){
    content = (
      <>
        <AdminNav />
      </>
    )
  } else if (isUser){
    content = (
      <>
        <UserNav />
      </>
    )
  } else {
    content = (
      <>
        <GuestNav />
      </>
    )
  }

  return (
    <>
      {content}
    </>
  );
}



