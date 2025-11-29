// src/services/authService.ts

// URL de tu microservicio de Usuarios (Puerto 8080)
const API_URL = "http://localhost:8100/api/usuarios";

export interface User {
  id?: number; // El ID es opcional al enviar, obligatorio al recibir
  username: string;
  nombreCompleto?: string; // Opcional porque a veces el backend no lo devuelve en login simple
  role: "ADMIN" | "USER";
  password?: string; // Solo se envía al registrar
}

export interface AuthResponse {
  token: string;
  tokenType: string;
  user: User;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const authService = {
  // 1. Iniciar Sesión
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Credenciales incorrectas");
    }

    return response.json();
  },

  // 2. Registrarse (ESTA ES LA QUE FALTABA 👇)
  async register(user: any): Promise<User> {
    // Nota: El backend espera un POST a /api/usuarios para crear
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }

    return response.json();
  },
};