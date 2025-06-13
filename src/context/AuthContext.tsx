import { createContext, useState } from "react";
import { ProfileType } from "@/types/profile-types";
import { AuthContextType, AuthState } from "@/types/authContextType";

const AuthContext = createContext<AuthContextType | null>(null);
const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: {
    username: "",
    email: "",
    profileImage: "",
    bannerUrl: "",
    followerCount: 0,
    followingCount: 0,
    createdAt: ""
},
  isLoading: false,
  isError: false,
};