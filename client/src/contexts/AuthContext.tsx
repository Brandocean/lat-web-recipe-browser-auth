import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CurrentUser } from "../types";
type AuthContextValue = {
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
  login: (token: string, user: CurrentUser) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextValue>({
  currentUser: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function login(token: string, user: CurrentUser) {
    // guarda el token en localStorage ("auth-token"),
    // actualiza currentUser y pon isAuthenticated en true
    localStorage.setItem("auth-token", token);
    setCurrentUser(user);
    setIsAuthenticated(true);
  }
  function logout() {
    // elimina "auth-token" de localStorage,
    // limpia currentUser y pon isAuthenticated en false
    localStorage.removeItem("auth-token");
    setCurrentUser(null);
    setIsAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{ currentUser, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}