import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (_jsx(AuthContext.Provider, { value: { auth, setAuth }, children: children }));
};
export default AuthContext;
