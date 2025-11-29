import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext" // <--- Necesitamos saber quién compra
import { useNavigate } from "react-router-dom"
import { orderService } from "../services/orderService" // <--- Importamos el servicio nuevo

export default function Checkout() {
  const { total, clear, cart, count } = useCart()
  const { user } = useAuth() // <--- Sacamos al usuario logueado
  const nav = useNavigate()
  
  const [procesando, setProcesando] = useState(false)

  // Si el carrito está vacío, te devuelve
  useEffect(() => {
    if (Object.keys(cart).length === 0) nav("/carrito")
  }, [cart, nav])

  const handlePagar = async () => {
    // 1. Validamos que el usuario esté logueado
    if (!user) {
      alert("Debes iniciar sesión para completar la compra, mi rey. 😉")
      nav("/login")
      return
    }

    setProcesando(true)

    try {
      // 2. Preparamos el resumen de productos (Ej: "2x Coca, 1x Fafita")
      const resumen = Object.values(cart)
        .map(item => `${item.qty}x ${item.name}`)
        .join(", ");

      // 3. Enviamos el pedido al Backend (Puerto 8082)
      await orderService.createOrder({
        usuarioId: user.id || 0,
        nombreCliente: user.nombreCompleto || user.username,
        totalCompra: total,
        detalleProductos: resumen
      })

      // 4. Si todo sale bien: Limpiamos carrito y vamos a gracias
      clear()
      nav("/gracias")

    } catch (error) {
      console.error(error)
      alert("Hubo un error al procesar tu pedido. Intenta nuevamente.")
    } finally {
      setProcesando(false)
    }
  }

  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title text-danger mb-4">💳 Finalizar Compra</h2>
        
        <div className="card shadow-sm p-4 mx-auto" style={{maxWidth: "500px"}}>
            <h4 className="mb-3">Resumen del Pedido</h4>
            <p className="lead">
                Estás llevando <strong>{count} productos</strong>
            </p>
            <h1 className="display-4 fw-bold text-success mb-4">
                ${total.toLocaleString()}
            </h1>

            {user ? (
                <div className="alert alert-info">
                    Comprando como: <strong>{user.nombreCompleto || user.username}</strong>
                </div>
            ) : (
                <div className="alert alert-warning">
                    ⚠️ Inicia sesión para continuar
                </div>
            )}

            <div className="d-grid gap-2">
                <button 
                    className="btn btn-success btn-lg" 
                    onClick={handlePagar}
                    disabled={procesando || !user}
                >
                    {procesando ? "Procesando..." : "✅ Confirmar Pago"}
                </button>
                
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => nav("/carrito")}
                    disabled={procesando}
                >
                    Volver al carrito
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}