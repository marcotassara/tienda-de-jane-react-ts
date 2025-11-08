import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Checkout() {
  const { total, clear, cart } = useCart()
  const nav = useNavigate()

  useEffect(() => {
    if (Object.keys(cart).length === 0) nav("/carrito")
  }, [cart, nav])

  const pagar = () => {
    clear()
    nav("/gracias")
  }

  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title">💳 Pago</h2>
        <p className="lead">Total a pagar: <strong>${total.toLocaleString()}</strong></p>
        <button className="btn btn-success me-2" onClick={pagar}>Pagar ahora</button>
        <button className="btn btn-outline-secondary" onClick={() => nav("/carrito")}>Volver al carrito</button>
      </div>
    </section>
  )
}
