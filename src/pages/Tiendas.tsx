import tienda1 from "../images/tienda.png"


export default function Tiendas() {
  const sucursales = [
    {
      nombre: "Sucursal Central",
      direccion: "Av. Los Aromos 1234, Santiago",
      horario: "Lunes a Sábado: 9:00 - 20:00",
      imagen: tienda1,
    },
    {
      nombre: "Sucursal Norte",
      direccion: "Av. Independencia 4500, Recoleta",
      horario: "Lunes a Viernes: 10:00 - 19:30",
      imagen: tienda1,
    },
    {
      nombre: "Sucursal Sur",
      direccion: "Camino El Bosque 980, San Bernardo",
      horario: "Lunes a Domingo: 9:00 - 21:00",
      imagen: tienda1,
    },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-danger mb-3">Nuestras Tiendas</h1>
          <p className="lead text-muted">
            Ven a conocernos en cualquiera de nuestras sucursales. ¡Te esperamos con la mejor atención!
          </p>
        </div>
      </section>

      {/* SUCURSALES */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {sucursales.map((s, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={s.imagen}
                    alt={s.nombre}
                    className="card-img-top"
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-danger fw-bold">{s.nombre}</h5>
                    <p className="card-text mb-1 text-muted">{s.direccion}</p>
                    <p className="card-text small">{s.horario}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        s.direccion
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm"
                    >
                      📍 Ver en mapa
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA GENERAL */}
      <section className="py-5 bg-light border-top">
        <div className="container text-center">
          <h2 className="fw-bold text-danger mb-3">Encuéntranos fácilmente</h2>
          <p className="text-muted mb-4">Consulta la ubicación de nuestras sucursales en el mapa.</p>
          <div className="ratio ratio-16x9 shadow-sm border rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.079379892972!2d-70.65044922489241!3d-33.43836707340257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a4d3423dd7%3A0x5b4b60f2ccdbd2e0!2sDuoc%20UC%20-%20Sede%20San%20Carlos%20de%20Apoquindo!5e0!3m2!1ses!2scl!4v1700000000000"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
