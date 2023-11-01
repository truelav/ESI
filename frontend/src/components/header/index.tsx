import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const {isAdmin, isUser, username} = useAuth()

  let content = <div></div>

  if(isAdmin){
    content = (
      <>
        <h2>Welcome : {username} - ADMIN</h2>
        <AdminNav />
      </>
    )
  } else if (isUser){
    content = (
      <>
        <h2>Welcome : {username} - USER</h2>
        <UserNav />
      </>
    )
  } else {
    content = (
      <>
        <h2>Please log in or contact us - GUEST</h2>
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



