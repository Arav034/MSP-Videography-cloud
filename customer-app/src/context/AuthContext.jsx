import { createContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext(null);

const STORAGE_KEY = "msp_auth_session";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // On first load, check if a previous session exists in localStorage.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(stored === "true");
    setLoading(false);
  }, []);

  const login = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}