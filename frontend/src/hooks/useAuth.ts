import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies] = useCookies();
  const accessToken = cookies?.authToken;
  console.log(cookies);
  let isAdmin = null;
  let isUser = null;

  interface DecodedToken {
    role: string;
    email: string;
  }

  if (accessToken) {
    const decoded: DecodedToken = jwtDecode(accessToken);
    const { role, email } = decoded;
    // console.log(role, email);

    if (role === "ADMIN") isAdmin = true;
    else if (role === "USER") isUser = true;

    return { username: email, role, isAdmin, isUser };
  }

  return { username: "", role: null, isAdmin, isUser };
};

export default useAuth;
