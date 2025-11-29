// src/context/AuthContext.tsx
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

  // Al cargar la página, verificamos si hay algo guardado en el navegador
  useEffect(() => {
    const storedUser = localStorage.getItem("jane_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials: LoginRequest) => {
    // 1. Llamamos al servicio
    const data = await authService.login(credentials);
    
    // 2. Guardamos el usuario en el estado
    setUser(data.user);

    // 3. Guardamos en localStorage para persistencia (Requisito PDF)
    localStorage.setItem("jane_user", JSON.stringify(data.user));
    localStorage.setItem("jane_token", data.token); // Guardamos el token por si acaso
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jane_user");
    localStorage.removeItem("jane_token");
    window.location.href = "/"; // Nos vamos al home
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto fácil
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};