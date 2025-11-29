import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { describe, it, expect } from 'vitest';

describe('Login Page', () => {
  it('debería renderizar los campos de usuario y contraseña', () => {
    // Necesitamos envolver en los Providers porque Login usa hooks
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    // Buscamos por el placeholder o label
    expect(screen.getByPlaceholderText(/Ej: admin/i)).toBeInTheDocument(); // Input usuario
    expect(screen.getByPlaceholderText(/Ej: 123/i)).toBeInTheDocument();   // Input pass
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument(); // Botón
  });
});