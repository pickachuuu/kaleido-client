'use client';

import { createContext, useContext, useReducer, useEffect } from "react";
import { ProfileType } from "@/types/profile-types";
import { AuthContextType, AuthState } from "@/types/authContextType";
import { dummyProfile } from "@/lib/dummyUser";


const initialState: AuthState = {
    isLoading: false,
    isLoggedIn: false,
    isError: false,
    user: null,
}

type Action = 
    | {type: "LOGIN", payload: ProfileType }
    | {type: "LOGOUT" }
    | {type: "SET_LOADING", payload: boolean }
    | {type: "SET_ERROR", payload: boolean };

const authReducer = (state: AuthState, action: Action): AuthState => {
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                isLoading: false
            };
        case 'SET_ERROR':
            return {
                ...state,
                isError: true
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}

const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({children}:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
        }
    }, []);


    const login = (userData: ProfileType ) => {
        dispatch({type: "SET_LOADING", payload: true})
        dispatch({type: "LOGIN", payload: dummyProfile})
        localStorage.setItem("user", JSON.stringify(userData));
        console.log(userData)
    };

    const logout = () => {
        dispatch({type: "SET_LOADING", payload: true})
        dispatch({type: "LOGOUT"})
    }

    return (
        <AuthContext.Provider value={{...state, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside the AuthProvider");
    return (
        context
    )
}