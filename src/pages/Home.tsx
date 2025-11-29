import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../sharedComponents/ProductCard"
import { productService, type Product } from "../services/productService" // <--- Usamos el servicio nuevo

// Eliminamos los imports de imágenes viejos
// import tienda from "../images/tienda.png" ...

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([])

  useEffect(() => {
    // Carga los productos reales desde el Backend (Puerto 8081)
    const loadFeatured = async () => {
      try {
        const data = await productService.getAll()
        // Mostramos solo los primeros 4 como "Destacados"
        setFeatured(data.slice(0, 4))
      } catch (error) {
        console.error("Error cargando destacados:", error)
      }
    }
    loadFeatured()
  }, [])

  return (
    <main>
      {/* HERO */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-5 fw-bold mb-3">Tienda de Jane</h1>
              <p className="lead text-muted">
                Tus bebidas y abarrotes favoritos, al mejor precio. Compra fácil, rápido y con la mejor atención.
              </p>
              <div className="d-flex gap-2 justify-content-center justify-content-lg-start mt-3">
                <Link to="/productos" className="btn btn-danger btn-lg">Ver productos</Link>
                <Link to="/carrito" className="btn btn-outline-danger btn-lg">Ir al carrito</Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/tienda.png" // <--- RUTA CORREGIDA
                alt="Tienda de Jane"
                className="img-fluid rounded shadow-sm hero-img"
                style={{ maxHeight: 380, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA PROMO */}
      <section className="py-3 bg-danger text-white">
        <div className="container text-center">
          <strong>📦 Envío gratis</strong> en compras desde <strong>$20.000</strong> — ¡aprovecha!
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">¿Por qué comprar con nosotros?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="/images/atencion.jpeg" className="card-img-top" alt="Atención" style={{ height: 180, objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Atención cercana</h5>
                  <p className="card-text text-muted">Resolvemos tus dudas y cuidamos cada detalle de tu compra.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="/images/calidad.jpeg" className="card-img-top" alt="Calidad" style={{ height: 180, objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Calidad garantizada</h5>
                  <p className="card-text text-muted">Productos seleccionados de marcas confiables y al mejor precio.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src="/images/comunidad.jpeg" className="card-img-top" alt="Comunidad" style={{ height: 180, objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Compromiso con la comunidad</h5>
                  <p className="card-text text-muted">Apoyamos iniciativas locales y el comercio responsable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS (Cargados desde Backend) */}
      {featured.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="section-title m-0">Destacados</h2>
              <Link to="/productos" className="btn btn-outline-danger btn-sm">Ver todos</Link>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              {featured.map((p) => (
                <div key={p.id} className="m-2">
                  {/* Aquí usamos tu componente ProductCard */}
                  <ProductCard name={p.name} image={p.image} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}