import useAuth from "../../hooks/useAuth";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";

export default function Header() {
  // const { isOpen, onToggle } = useDisclosure();
  const { isAdmin, isUser } = useAuth();

  let content = <div></div>;

  if (isAdmin) {
    content = (
      <>
        <AdminNav />
      </>
    );
  } else if (isUser) {
    content = (
      <>
        <UserNav />
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
