import { render, screen } from '@testing-library/react';
import Navbar from '../sharedComponents/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
  it('debería mostrar la marca de la tienda', () => {
    render(
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    );

    const brandName = screen.getByText(/Tienda de Jane/i);
    expect(brandName).toBeInTheDocument();
  });
});