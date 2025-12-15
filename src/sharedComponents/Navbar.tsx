import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext" 

export default function Navbar() {
  
  let count = 0
  try {
    count = useCart().count
  } catch {
    count = 0
  }

  
  const { user, logout } = useAuth() 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand ms-2 fw-bold" style={{ letterSpacing: "1px" }}>
          Tienda de Jane 
        </Link>

        
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

        
        <div id="navJane" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tiendas" className="nav-link">Tiendas</NavLink>
            </li>
            <li className="nav-item">
              <Link to="/mis-pedidos" className="nav-link text-danger">Mis Pedidos 📦</Link>
            </li>
            
            <li className="nav-item">
              <NavLink to="/ingreso" className="nav-link">Ingreso Stock</NavLink>
            </li>
          </ul>

          
          <div className="d-flex align-items-center gap-3">
            
            
            <Link to="/carrito" className="btn btn-light position-relative text-danger fw-bold border-0">
               🛒 <span className="d-none d-md-inline ms-1">Carrito</span>
               {count > 0 && (
                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark border border-light">
                   {count}
                   <span className="visually-hidden">productos</span>
                 </span>
               )}
            </Link>

            
            {user ? (
             
              <div className="dropdown">
                <button 
                  className="btn btn-outline-light dropdown-toggle fw-bold" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  👤 Hola, {user.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li><span className="dropdown-item-text text-muted small">{user.nombreCompleto}</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>
                      🚪 Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              
              <Link to="/login" className="btn btn-warning fw-bold shadow-sm">
                🔒 Ingresar
              </Link>
            )}
            
          </div>
        </div>
      </div>
    </nav>
  )
}