import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies] = useCookies();
  const accessToken = cookies?.authToken;
  let isAdmin = false;
  let isUser = false;

  interface DecodedToken {
    role: string
    email: string
    id: string
  }

  if (accessToken) {
    const decoded: DecodedToken = jwtDecode(accessToken);
    const { role, email, id } = decoded;
    console.log(decoded);

    if (role === "ADMIN") isAdmin = true;
    else if (role === "CUSTOMER") isUser = true;

    return { username: email, role, isAdmin, isUser, id };
  }

  return { username: "", role: null, isAdmin, isUser, id: null };
};

export default useAuth;
