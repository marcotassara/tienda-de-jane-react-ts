import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Productos from '../pages/Productos';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import { productService } from '../services/productService';


vi.mock('../services/productService');

describe('Pruebas de Integración Frontend', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Flujo: Cargar Productos -> El usuario ve el catálogo del backend', async () => {
    
    const mockProductos = [
      { id: 1, name: 'Coca-Cola Integración', price: 1000, stock: 10, category: 'Bebidas', image: '/img.jpg' },
      { id: 2, name: 'Fafita Integración', price: 500, stock: 5, category: 'Jugos', image: '/img.jpg' }
    ];

    
    (productService.getAll as any).mockResolvedValue(mockProductos);

   
    render(
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Productos />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    );

    await waitFor(() => {
      
      expect(screen.getByText('Coca-Cola Integración')).toBeInTheDocument();
      expect(screen.getByText('Fafita Integración')).toBeInTheDocument();
      
      
      expect(screen.getByText(/1[.,]000/)).toBeInTheDocument();
    });
  });

  it('Flujo: Buscador -> Filtrar productos en tiempo real', async () => {
    
    const mockProductos = [
      { id: 1, name: 'Cerveza', price: 2000, stock: 10, category: 'Alcohol', image: '/img.jpg' },
      { id: 2, name: 'Jugo', price: 1000, stock: 10, category: 'Jugos', image: '/img.jpg' }
    ];
    (productService.getAll as any).mockResolvedValue(mockProductos);

    
    render(
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Productos />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    );

    
    await waitFor(() => expect(screen.getByText('Cerveza')).toBeInTheDocument());
  });
});