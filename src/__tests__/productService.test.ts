import { describe, it, expect, vi, beforeEach } from 'vitest';
import { productService } from '../services/productService';

// 👇 CAMBIO MÁGICO: Usamos 'globalThis' en vez de 'global'
globalThis.fetch = vi.fn();

describe('productService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getAll debería llamar a la API correcta', async () => {
    // Simulamos una respuesta exitosa
    const mockResponse = [{ id: 1, name: 'Bebida Test' }];
    
    // 👇 CAMBIO AQUÍ TAMBIÉN
    (globalThis.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const products = await productService.getAll();

    // 1. Verificamos que se llamó a la URL correcta (Puerto 8081)
    // 👇 Y AQUÍ
    expect(globalThis.fetch).toHaveBeenCalledWith('http://localhost:8081/api/products');
    
    // 2. Verificamos que devolvió los datos
    expect(products).toEqual(mockResponse);
  });
});