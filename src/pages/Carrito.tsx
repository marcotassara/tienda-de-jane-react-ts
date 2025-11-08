import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Carrito() {
  // Hook seguro: si falta el provider devuelve un contexto vacío
  const { cart, add, dec, remove, total, count } = useCart()
  const nav = useNavigate()

  let items: Array<{ id: number; name: string; price: number; image: string; qty: number }>
  try {
    items = Object.values(cart || {})
      .filter((it: any) => it && typeof it.id === "number" && typeof it.qty === "number")
  } catch {
    items = []
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">🛒 Carrito de compras</h2>

        {items.length === 0 ? (
          <>
            <p className="text-muted">Tu carrito está vacío.</p>
            <button className="btn btn-danger" onClick={() => nav("/productos")}>
              Ver productos
            </button>
          </>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it) => (
                    <tr key={it.id}>
                      <td>
                        <img src={it.image} alt="" width={40} className="me-2 rounded" />
                        {it.name}
                      </td>
                      <td>${Number(it.price || 0).toLocaleString()}</td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary" onClick={() => dec(it.id)}>-</button>
                          <button className="btn btn-sm btn-light" disabled>{it.qty}</button>
                          <button className="btn btn-sm btn-outline-secondary" onClick={() => add(it, 1)}>+</button>
                        </div>
                      </td>
                      <td>${(Number(it.price || 0) * Number(it.qty || 0)).toLocaleString()}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => remove(it.id)}>
                          Quitar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between">
              <strong>Ítems: {Number(count || 0)} — Total: ${Number(total || 0).toLocaleString()}</strong>
              <button className="btn btn-success" onClick={() => nav("/checkout")}>
                Continuar al pago
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
