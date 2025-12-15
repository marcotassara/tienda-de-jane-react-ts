const API_URL = "http://localhost:8082/api/pedidos";

export interface Pedido {
  id?: number;
  usuarioId: number;
  nombreCliente: string;
  totalCompra: number;
  detalleProductos: string;
  fecha?: string; 
  estado?: string;
}

export const orderService = {
  
  async createOrder(pedido: Pedido): Promise<any> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });
    if (!response.ok) throw new Error("Error al procesar el pago");
    return await response.json();
  },

  
  async getByUsuario(idUsuario: number): Promise<Pedido[]> {
    const response = await fetch(`${API_URL}/usuario/${idUsuario}`);
    if (!response.ok) throw new Error("Error al obtener pedidos");
    return await response.json();
  }
};