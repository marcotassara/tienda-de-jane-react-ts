import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-2">Tienda de Jane</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navJane">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navJane" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/productos', label: 'Nuestros Productos' },
              { to: '/tiendas', label: 'Nuestras Tiendas' },
              { to: '/acerca', label: 'Acerca de' },
            ].map(link => (
              <li key={link.to} className="nav-item">
                <NavLink end className="nav-link" to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <button className="btn btn-light me-2">Cerrar Sesión</button>
        </div>
      </div>
    </nav>
  )
}
