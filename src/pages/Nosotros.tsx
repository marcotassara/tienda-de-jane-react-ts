

export default function Nosotros() {
  return (
    <main>
      
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h1 className="display-5 fw-bold mb-3 text-danger">Nosotros</h1>
          <p className="lead text-muted mb-4">
            En <strong>Tienda de Jane</strong> trabajamos con pasión para ofrecerte productos de calidad, buen servicio y cercanía humana.
          </p>
          <img
            src="/images/tienda.png" 
            alt="Nuestra tienda"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: 320, objectFit: "cover" }}
          />
        </div>
      </section>

      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="fw-bold text-danger mb-3">¿Quiénes somos?</h2>
              <p className="text-muted">
                Somos un equipo local comprometido con ofrecerte la mejor experiencia de compra. 
                Comenzamos como una pequeña tienda de barrio y hoy contamos con un catálogo variado 
                que puedes explorar desde la comodidad de tu casa.
              </p>
              <p className="text-muted">
                Nuestro objetivo es que cada cliente encuentre en nosotros confianza, 
                rapidez y atención personalizada. ¡Gracias por preferirnos!
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/atencion.jpeg" 
                alt="Nuestro equipo"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: 320, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 text-danger">Nuestros valores</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <img
                src="/images/calidad.jpeg" 
                alt="Calidad"
                className="img-fluid rounded mb-3 shadow-sm"
                style={{ height: 180, objectFit: "cover" }}
              />
              <h5>Calidad</h5>
              <p className="text-muted small">
                Productos seleccionados cuidadosamente, garantizando frescura y satisfacción.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="/images/atencion.jpeg" 
                alt="Atención"
                className="img-fluid rounded mb-3 shadow-sm"
                style={{ height: 180, objectFit: "cover" }}
              />
              <h5>Atención</h5>
              <p className="text-muted small">
                Nos esforzamos en cada interacción para entregar un servicio amable y eficiente.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="/images/comunidad.jpeg" 
                alt="Comunidad"
                className="img-fluid rounded mb-3 shadow-sm"
                style={{ height: 180, objectFit: "cover" }}
              />
              <h5>Comunidad</h5>
              <p className="text-muted small">
                Apoyamos a proveedores locales y fomentamos el consumo responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-danger mb-3">Contáctanos</h2>
          <p className="text-muted mb-4">
            Si tienes dudas, sugerencias o simplemente quieres saludarnos, 
            escríbenos y te responderemos lo antes posible.
          </p>
          <a href="mailto:contacto@tiendadejane.cl" className="btn btn-danger btn-lg">
            contacto@tiendadejane.cl
          </a>
        </div>
      </section>
    </main>
  )
}