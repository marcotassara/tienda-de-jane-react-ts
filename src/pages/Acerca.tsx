// Borramos los imports de imágenes porque ya no están en src
// import tienda from "../images/tienda.png" <--- ADIÓS
// import calidad from "../images/calidad.jpeg" <--- ADIÓS
// import comunidad from "../images/comunidad.jpeg" <--- ADIÓS

export default function Acerca() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-danger mb-3">Acerca de</h1>
          <p className="lead text-muted">
            Conoce la historia, misión y visión detrás de <strong>Tienda de Jane</strong>.
          </p>
          <img
            src="/images/tienda.png" // <--- CAMBIO AQUÍ (Ruta directa)
            alt="Acerca de Tienda de Jane"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: 320, objectFit: "cover" }}
          />
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold text-danger mb-3">Nuestra misión</h2>
              <p className="text-muted">
                Ofrecer productos de calidad a precios justos, con un servicio cercano y confiable, 
                facilitando la experiencia de compra a través de una plataforma simple y amigable.
              </p>
              <h2 className="fw-bold text-danger mt-4 mb-3">Nuestra visión</h2>
              <p className="text-muted">
                Convertirnos en la tienda de barrio digital preferida por la comunidad, 
                impulsando la economía local y promoviendo el consumo responsable.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/calidad.jpeg" // <--- CAMBIO AQUÍ
                alt="Calidad"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: 300, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LÍNEA DE TIEMPO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-danger text-center mb-4">Nuestra historia</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">2023 — Nace la idea</h5>
                  <p className="text-muted small">
                    Iniciamos como un pequeño catálogo en línea para nuestros vecinos del barrio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">2024 — Primera versión</h5>
                  <p className="text-muted small">
                    Lanzamos la primera versión web con un set básico de productos y entregas programadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">2025 — Tienda de Jane</h5>
                  <p className="text-muted small">
                    Evolucionamos a una SPA con gestión de productos, carrito y flujo de compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <img
              src="/images/comunidad.jpeg" // <--- CAMBIO AQUÍ
              alt="Comunidad"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: 260, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-danger text-center mb-4">Preguntas frecuentes</h2>
          <div className="accordion mx-auto" id="faq" style={{ maxWidth: 820 }}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="q1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true" aria-controls="c1">
                  ¿Cómo puedo comprar?
                </button>
              </h2>
              <div id="c1" className="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faq">
                <div className="accordion-body text-muted">
                  Agrega productos desde <strong>Nuestros Productos</strong>, revisa el <strong>Carrito</strong> y finaliza el pago en <strong>Checkout</strong>.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="q2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c2" aria-expanded="false" aria-controls="c2">
                  ¿Puedo retirar en tienda?
                </button>
              </h2>
              <div id="c2" className="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faq">
                <div className="accordion-body text-muted">
                  Sí, puedes elegir <em>retiro en tienda</em> y pasar por la sucursal disponible que prefieras.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="q3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c3" aria-expanded="false" aria-controls="c3">
                  ¿Cómo gestiono stock y precios?
                </button>
              </h2>
              <div id="c3" className="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#faq">
                <div className="accordion-body text-muted">
                  Desde la página <strong>Ingreso Stock</strong> puedes actualizar el <em>precio</em> y sumar <em>stock</em> por producto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-5 bg-danger text-white">
        <div className="container text-center">
          <h3 className="fw-bold mb-2">¿Listo para conocer nuestros productos?</h3>
          <p className="mb-3">Explora el catálogo y encuentra todo lo que necesitas al mejor precio.</p>
          <a href="/productos" className="btn btn-light btn-lg">Ver productos</a>
        </div>
      </section>
    </main>
  )
}