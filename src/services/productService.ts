

const API_URL = "http://localhost:8081/api/products";

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  stock: number;
}

export const productService = {

  async getAll(): Promise<Product[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al cargar productos");
    return await response.json();
  },

  
  async create(product: Omit<Product, "id">): Promise<Product> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Error al crear producto");
    return await response.json();
  },

 
  async update(id: number, product: Partial<Product>): Promise<Product> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Error al actualizar producto");
    return await response.json();
  },

  
  async remove(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar producto");
  }
};