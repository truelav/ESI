import { createContext, ReactNode, useState } from "react";

interface AuthProviderChildren {
    children: ReactNode
}

const AuthContext = createContext({ })

export const AuthProvider = ({ children }: AuthProviderChildren) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext