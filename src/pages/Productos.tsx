import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext" 
import { productService, type Product } from "../services/productService"

export default function Productos() {
   
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  
  const [busqueda, setBusqueda] = useState("")

  
  const { add } = useCart()
  const { user } = useAuth() 

  
  const [nuevoNombre, setNuevoNombre] = useState("")
  const [nuevaCategoria, setNuevaCategoria] = useState("")
  const [nuevoPrecio, setNuevoPrecio] = useState(0)
  const [nuevoStock, setNuevoStock] = useState(0)
  const [nuevaImagen, setNuevaImagen] = useState("/images/coca-cola1.25L.jpg") 

  
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Product>>({})

  
  useEffect(() => {
    cargarProductos()
  }, [])

  const cargarProductos = async () => {
    setLoading(true)
    try {
      const data = await productService.getAll()
      setProducts(data)
      setError("")
    } catch (err) {
      setError("Error conectando con el servidor de productos (8081).")
    } finally {
      setLoading(false)
    }
  }


  const productosFiltrados = products.filter((p) => {
   
    const texto = busqueda.toLowerCase()
    return (
      p.name.toLowerCase().includes(texto) || 
      p.category.toLowerCase().includes(texto) 
    )
  })

  
  const handleCrear = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nuevoNombre.trim()) return

    try {
      await productService.create({
        name: nuevoNombre,
        category: nuevaCategoria,
        price: nuevoPrecio,
        stock: nuevoStock,
        image: nuevaImagen
      })
      setNuevoNombre(""); setNuevaCategoria(""); setNuevoPrecio(0); setNuevoStock(0);
      cargarProductos()
    } catch (err) {
      alert("Error al crear producto")
    }
  }

  
  const iniciarEdicion = (p: Product) => {
    setEditandoId(p.id)
    setEditForm(p) 
  }

  const guardarEdicion = async () => {
    if (!editandoId) return
    try {
      await productService.update(editandoId, editForm)
      setEditandoId(null)
      cargarProductos()
    } catch (err) {
      alert("Error al guardar cambios")
    }
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setEditForm({})
  }

  
  const handleEliminar = async (id: number) => {
    if (!confirm("¿Seguro que quieres borrar este producto de la base de datos?")) return
    try {
      await productService.remove(id)
      cargarProductos()
    } catch (err) {
      alert("Error al eliminar")
    }
  }

  const handleAddToCart = (p: Product) => {
    add({ id: p.id, name: p.name, price: p.price, image: p.image }, 1)
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-center text-danger mb-4">Gestión de Productos</h2>

       
        <div className="row justify-content-center mb-5">
            <div className="col-md-6">
                <div className="input-group input-group-lg shadow-sm">
                    <span className="input-group-text bg-danger text-white border-danger">🔍</span>
                    <input 
                        type="text" 
                        className="form-control border-danger" 
                        placeholder="Buscar por nombre o categoría..." 
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    {busqueda && (
                        <button className="btn btn-outline-secondary" onClick={() => setBusqueda("")}>❌</button>
                    )}
                </div>
            </div>
        </div>

        
        {user && (
          <div className="card p-4 mb-5 border-danger shadow-sm">
            <h5 className="text-danger fw-bold mb-3">🛠️ Panel de Control: Agregar Producto</h5>
            <form onSubmit={handleCrear} className="row g-3">
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Nombre" 
                  value={nuevoNombre} onChange={e => setNuevoNombre(e.target.value)} required />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Categoría" 
                  value={nuevaCategoria} onChange={e => setNuevaCategoria(e.target.value)} required />
              </div>
              <div className="col-md-2">
                <input type="number" className="form-control" placeholder="Precio" 
                  value={nuevoPrecio} onChange={e => setNuevoPrecio(Number(e.target.value))} required />
              </div>
              <div className="col-md-2">
                <input type="number" className="form-control" placeholder="Stock" 
                  value={nuevoStock} onChange={e => setNuevoStock(Number(e.target.value))} required />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-danger w-100 fw-bold">＋ Agregar</button>
              </div>
              <div className="col-12">
                <input type="text" className="form-control form-control-sm text-muted" placeholder="URL de imagen (ej: /images/foto.jpg)" 
                  value={nuevaImagen} onChange={e => setNuevaImagen(e.target.value)} />
              </div>
            </form>
          </div>
        )}

        {loading && <div className="text-center py-5"><div className="spinner-border text-danger"></div></div>}
        {error && <div className="alert alert-warning text-center">{error}</div>}

        
        {!loading && (
          <div className="d-flex flex-wrap justify-content-center">
            {productosFiltrados.length === 0 ? (
                <div className="text-center mt-5">
                    <h4 className="text-muted">No encontramos productos que coincidan con "{busqueda}" 😢</h4>
                </div>
            ) : (
                productosFiltrados.map(p => (
                <div key={p.id} className="m-3" style={{ width: "18rem" }}>
                    
                    {editandoId === p.id ? (
                    
                    <div className="card h-100 shadow border-warning p-2">
                        <div className="card-header bg-warning text-dark fw-bold">Editando...</div>
                        <div className="card-body">
                        <input className="form-control mb-2" value={editForm.name} onChange={e=>setEditForm({...editForm, name: e.target.value})} placeholder="Nombre" />
                        <input className="form-control mb-2" value={editForm.category} onChange={e=>setEditForm({...editForm, category: e.target.value})} placeholder="Categoría" />
                        <input className="form-control mb-2" type="number" value={editForm.price} onChange={e=>setEditForm({...editForm, price: Number(e.target.value)})} placeholder="Precio" />
                        <input className="form-control mb-2" type="number" value={editForm.stock} onChange={e=>setEditForm({...editForm, stock: Number(e.target.value)})} placeholder="Stock" />
                        
                        <div className="d-flex gap-2 mt-3">
                            <button onClick={guardarEdicion} className="btn btn-success btn-sm w-50">Guardar</button>
                            <button onClick={cancelarEdicion} className="btn btn-secondary btn-sm w-50">Cancelar</button>
                        </div>
                        </div>
                    </div>
                    ) : (
                    
                    <div className="card h-100 shadow-sm border-0 product-card-hover">
                        <div className="position-relative">
                            <img src={p.image} className="card-img-top" alt={p.name} style={{ height: "200px", objectFit: "cover" }} />
                            {p.stock === 0 && <span className="position-absolute top-0 end-0 badge bg-secondary m-2">Agotado</span>}
                        </div>
                        
                        <div className="card-body">
                        <h5 className="card-title fw-bold text-truncate">{p.name}</h5>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border">{p.category}</span>
                            <span className="text-muted small">Stock: {p.stock}</span>
                        </div>
                        <h4 className="text-danger fw-bold mb-3">${p.price.toLocaleString()}</h4>

                        <button 
                            className={`btn w-100 mb-2 ${p.stock > 0 ? 'btn-danger' : 'btn-secondary'}`}
                            onClick={() => handleAddToCart(p)}
                            disabled={p.stock <= 0}
                        >
                            {p.stock > 0 ? "Añadir al Carrito 🛒" : "Sin Stock"}
                        </button>

                        {user && (
                            <div className="d-flex gap-2">
                                <button onClick={() => iniciarEdicion(p)} className="btn btn-outline-primary btn-sm w-50">✏️ Editar</button>
                                <button onClick={() => handleEliminar(p.id)} className="btn btn-outline-dark btn-sm w-50">🗑️ Borrar</button>
                            </div>
                        )}
                        </div>
                    </div>
                    )}
                </div>
                ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}