import { jwtDecode } from "jwt-decode";

const useAuth = ({ token }) => {
  let isAdmin = null;

  if (token) {
    const decoded = jwtDecode(token);
    console.log(decoded);
    const { role, name } = decoded;

    if (role === "ADMIN") isAdmin = true;

    return { name, role, isAdmin: isAdmin };
  }

  return { name: "", role: "", isAdmin: false };
};

export default useAuth;
