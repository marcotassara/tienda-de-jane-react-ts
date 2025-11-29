import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Productos from '../pages/Productos';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import { productService } from '../services/productService';

// 1. Simulamos el servicio para no depender del backend real
vi.mock('../services/productService');

describe('Pruebas de Integración Frontend', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Flujo: Cargar Productos -> El usuario ve el catálogo del backend', async () => {
    // A. PREPARAR (GIVEN)
    const mockProductos = [
      { id: 1, name: 'Coca-Cola Integración', price: 1000, stock: 10, category: 'Bebidas', image: '/img.jpg' },
      { id: 2, name: 'Fafita Integración', price: 500, stock: 5, category: 'Jugos', image: '/img.jpg' }
    ];

    // Forzamos a que el servicio devuelva esto
    (productService.getAll as any).mockResolvedValue(mockProductos);

    // B. ACTUAR (WHEN)
    render(
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Productos />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    );

    // C. VERIFICAR (THEN)
    await waitFor(() => {
      // Verificamos que React haya tomado los datos y creado las tarjetas
      expect(screen.getByText('Coca-Cola Integración')).toBeInTheDocument();
      expect(screen.getByText('Fafita Integración')).toBeInTheDocument();
      
      // Verificamos el precio formateado
      expect(screen.getByText(/1[.,]000/)).toBeInTheDocument();
    });
  });

  it('Flujo: Buscador -> Filtrar productos en tiempo real', async () => {
    // A. PREPARAR
    const mockProductos = [
      { id: 1, name: 'Cerveza', price: 2000, stock: 10, category: 'Alcohol', image: '/img.jpg' },
      { id: 2, name: 'Jugo', price: 1000, stock: 10, category: 'Jugos', image: '/img.jpg' }
    ];
    (productService.getAll as any).mockResolvedValue(mockProductos);

    // B. ACTUAR
    // Renderizamos sin guardar la variable "user" porque no la usamos en este test
    render(
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Productos />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    );

    // C. VERIFICAR
    // Esperamos a que cargue el producto inicial "Cerveza"
    await waitFor(() => expect(screen.getByText('Cerveza')).toBeInTheDocument());
  });
});