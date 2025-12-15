import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { orderService, type Pedido } from "../services/orderService";
import { Link } from "react-router-dom";

export default function MisPedidos() {
  const { user } = useAuth();
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      cargarPedidos(user.id);
    }
  }, [user]);

  const cargarPedidos = async (userId: number) => {
    try {
      const data = await orderService.getByUsuario(userId);
      // Ordenamos para ver el más reciente primero (opcional)
      setPedidos(data.reverse());
    } catch (error) {
      console.error("Error cargando pedidos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="text-center mt-5">🔒 Inicia sesión para ver tus compras.</div>;

  return (
    <section className="section py-5">
      <div className="container">
        <h2 className="text-center text-danger mb-4">📦 Mis Pedidos</h2>

        {loading ? (
          <div className="text-center"><div className="spinner-border text-danger"></div></div>
        ) : pedidos.length === 0 ? (
          <div className="text-center alert alert-info">
            Aún no has realizado ninguna compra. <br />
            <Link to="/productos" className="btn btn-sm btn-danger mt-2">Ir a comprar</Link>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {pedidos.map((p) => (
                <div key={p.id} className="card shadow-sm mb-3 border-start border-danger border-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold text-dark">Orden #{p.id}</h5>
                      <span className="badge bg-success">Completado</span>
                    </div>
                    
                    <p className="mb-1 text-muted">
                      <strong>Productos:</strong> {p.detalleProductos}
                    </p>
                    
                    <hr />
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-secondary">Cliente: {p.nombreCliente}</small>
                      <h4 className="text-danger fw-bold m-0">${p.totalCompra.toLocaleString()}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}