
import React, { createContext, useContext, useState, useEffect } from "react";
import { authService, type LoginRequest, type User } from "../services/authService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("jane_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials: LoginRequest) => {
   
    const data = await authService.login(credentials);
    
   
    setUser(data.user);

  
    localStorage.setItem("jane_user", JSON.stringify(data.user));
    localStorage.setItem("jane_token", data.token); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jane_user");
    localStorage.removeItem("jane_token");
    window.location.href = "/"; 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};