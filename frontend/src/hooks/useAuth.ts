import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/slice/authSlice";
// import { selectCurrentToken } from "../features/auth/slice/authSlice"
// import { RootState } from "@reduxjs/toolkit/query";

const useAuth = () => {

  // const accessToken = useSelector((state) => state.auth.accessToken)
  const accessToken = useSelector(selectCurrentToken)
  let isAdmin = null;
  let isUser = null;
  console.log(accessToken)

  interface DecodedToken {
    role: string;
    email: string;
  }

  if (accessToken) {
    const decoded: DecodedToken  = jwtDecode(accessToken);
    const { role, email } = decoded;
    console.log(role, email);

    if (role === "ADMIN") isAdmin = true;
    else if (role === "USER") isUser = true;

    return { username: email, role, isAdmin, isUser };
  }

  return { username: "", role: null, isAdmin, isUser };
};

export default useAuth;
