// src/services/orderService.ts

// Apuntamos al puerto 8082 (Tu Microservicio de Pedidos)
const API_URL = "http://localhost:8082/api/pedidos";

// Definimos la estructura del Pedido (Igual que en Java)
export interface Pedido {
  usuarioId: number;
  nombreCliente: string;
  totalCompra: number;
  detalleProductos: string; // Enviaremos el resumen como texto
  estado?: string;
}

export const orderService = {
  // Función para enviar la compra al backend
  async createOrder(pedido: Pedido): Promise<any> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });

    if (!response.ok) {
      throw new Error("Error al procesar el pago");
    }

    return await response.json();
  }
};