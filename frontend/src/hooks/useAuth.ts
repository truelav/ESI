import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/slice/authSlice"
import { RootState } from "@reduxjs/toolkit/query";

const useAuth = () => {

  const accessToken = useSelector((state: RootState) => state.auth.accessToken)
  let isAdmin = null;
  let isUser = null;
  console.log(accessToken)

  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    console.log(decoded);
    const { role, name } = decoded;

    if (role === "ADMIN") isAdmin = true;
    else if (role === "USER") isUser = true;

    return { username: name, role, isAdmin, isUser };
  }

  return { username: "", role: null, isAdmin, isUser };
};

export default useAuth;
