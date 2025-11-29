


const API_URL = "http://localhost:8100/api/usuarios";

export interface User {
  id?: number;
  username: string;
  nombreCompleto?: string; 
  role: "ADMIN" | "USER";
  password?: string;
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

 
  async register(user: any): Promise<User> {

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