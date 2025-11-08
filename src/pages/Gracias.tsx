import { Link } from "react-router-dom"

export default function Gracias() {
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title">🎉 ¡Gracias por tu compra!</h2>
        <p>Tu pedido fue procesado correctamente.</p>
        <Link to="/" className="btn btn-danger">Volver al inicio</Link>
      </div>
    </section>
  )
}
