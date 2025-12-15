export default function Tiendas() {
  const sucursales = [
    {
      nombre: "Sucursal Central",
      direccion: "Av. Los Aromos 1234, Santiago",
      horario: "Lunes a Sábado: 9:00 - 20:00",
      imagen: "/images/tienda.png", 
    },
    {
      nombre: "Sucursal Norte",
      direccion: "Av. Independencia 4500, Recoleta",
      horario: "Lunes a Viernes: 10:00 - 19:30",
      imagen: "/images/tienda.png", 
    },
    {
      nombre: "Sucursal Sur",
      direccion: "Camino El Bosque 980, San Bernardo",
      horario: "Lunes a Domingo: 9:00 - 21:00",
      imagen: "/images/tienda.png", 
    },
  ]

  return (
    <main>
      <section className="py-5 bg-light border-bottom">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-danger mb-3">Nuestras Tiendas</h1>
          <p className="lead text-muted">
            Ven a conocernos en cualquiera de nuestras sucursales. ¡Te esperamos con la mejor atención!
          </p>
        </div>
      </section>

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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
    </main>
  )
}