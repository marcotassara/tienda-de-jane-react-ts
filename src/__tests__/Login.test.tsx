import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { describe, it, expect } from 'vitest';

describe('Login Page', () => {
  it('debería renderizar los campos de usuario y contraseña', () => {
    
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    
    expect(screen.getByPlaceholderText(/Ej: admin/i)).toBeInTheDocument(); 
    expect(screen.getByPlaceholderText(/Ej: 123/i)).toBeInTheDocument();   
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument(); 
  });
});