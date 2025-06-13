import { ProfileType } from "./profile-types";

export type AuthState = {
  isLoggedIn: boolean;
  user: ProfileType;
  isLoading: boolean;
  isError: boolean;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  user: ProfileType;
  isLoading: boolean;
  isError: boolean;
  login: (userData: ProfileType) => void;
  logout: () => void;
}
