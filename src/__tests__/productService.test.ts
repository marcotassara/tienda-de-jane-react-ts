import { describe, it, expect, vi, beforeEach } from 'vitest';
import { productService } from '../services/productService';


globalThis.fetch = vi.fn();

describe('productService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getAll debería llamar a la API correcta', async () => {
    
    const mockResponse = [{ id: 1, name: 'Bebida Test' }];
    
    
    (globalThis.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const products = await productService.getAll();

   
    expect(globalThis.fetch).toHaveBeenCalledWith('http://localhost:8081/api/products');
    
    
    expect(products).toEqual(mockResponse);
  });
});