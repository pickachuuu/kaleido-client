import { createContext, useState, useEffect, Children, ReactNode } from "react";

interface Props {
    Children? : ReactNode
}

const AuthContext = createContext({});

const AuthProvider = ({ Children, ...Props }: Props) => {
    const [token, setToken] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const updateToken = () => {

    }

    const removeToken = () => {

    }

    const logout = () => {

    }

    const util = { token, setToken, updateToken, removeToken, logout };

    return (
        <AuthContext.Provider value={util}>
            {Children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };