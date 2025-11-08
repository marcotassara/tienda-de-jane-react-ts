import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  // Intentamos leer el contexto del carrito (puede no existir en modo hot-reload)
  let count = 0
  try {
    count = useCart().count
  } catch {
    count = 0
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        {/* Marca */}
        <Link to="/" className="navbar-brand ms-2">
          Tienda de Jane
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navJane"
          aria-controls="navJane"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div id="navJane" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">
                Nuestros Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tiendas" className="nav-link">
                Nuestras Tiendas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/acerca" className="nav-link">
                Acerca de
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ingreso" className="nav-link">
                Ingreso Stock
              </NavLink>
            </li>
          </ul>

          {/* Botón del carrito */}
          <Link to="/carrito" className="btn btn-light me-3">🛒 Carrito</Link>

          {/* Cerrar sesión (decorativo) */}
          <button className="btn btn-outline-light">Cerrar Sesión</button>
        </div>
      </div>
    </nav>
  )
}
