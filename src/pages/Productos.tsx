import { useEffect, useMemo, useState } from "react"
import ProductCard from "../sharedComponents/ProductCard"
import type { Product } from "../data/products"
import { products as demoProducts } from "../data/products"

export default function Productos() {
  // Estado base
  const [products, setProducts] = useState<Product[]>([])
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [imagenUrl, setImagenUrl] = useState("")
  const [editandoId, setEditandoId] = useState<number | null>(null)

  // Estado de edición inline
  const [editNombre, setEditNombre] = useState("")
  const [editCategoria, setEditCategoria] = useState("")
  const [editImagenUrl, setEditImagenUrl] = useState("")

  // Sembrar/leer desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("productos")
    if (saved) {
      setProducts(JSON.parse(saved))
    } else {
      setProducts(demoProducts)
      localStorage.setItem("productos", JSON.stringify(demoProducts))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(products))
  }, [products])

  // Imágenes disponibles para el selector (tomadas del listado actual, sin duplicados)
  const availableImages = useMemo(() => {
    const set = new Set(products.map(p => p.image).filter(Boolean))
    return Array.from(set)
  }, [products])

  // Crear / Editar (formulario superior)
  const handleGuardarNuevo = () => {
    if (!nombre.trim() || !categoria.trim()) return
    const nuevo: Product = {
      id: Date.now(),
      name: nombre.trim(),
      category: categoria.trim(),
      image: imagenUrl.trim() || "/vite.svg",
    }
    setProducts(prev => [...prev, nuevo])
    setNombre("")
    setCategoria("")
    setImagenUrl("")
  }

  // Comenzar edición de una card
  const handleEditar = (id: number) => {
    const p = products.find(x => x.id === id)
    if (!p) return
    setEditandoId(id)
    setEditNombre(p.name)
    setEditCategoria(p.category ?? "")
    setEditImagenUrl(p.image ?? "")
  }

  // Guardar cambios de la card
  const handleGuardarEdicion = () => {
    if (!editNombre.trim() || !editCategoria.trim() || editandoId === null) return
    setProducts(prev =>
      prev.map(p =>
        p.id === editandoId
          ? { ...p, name: editNombre.trim(), category: editCategoria.trim(), image: editImagenUrl.trim() || p.image }
          : p
      )
    )
    cancelarEdicion()
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setEditNombre("")
    setEditCategoria("")
    setEditImagenUrl("")
  }

  const handleEliminar = (id: number) => setProducts(prev => prev.filter(p => p.id !== id))

  const restaurarDemo = () => {
    setProducts(demoProducts)
    localStorage.setItem("productos", JSON.stringify(demoProducts))
  }

  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title">Gestión de Productos</h2>
        <p className="mt-2">Agrega, edita (inline) o elimina productos. Todo queda guardado en tu navegador.</p>

        {/* Formulario de alta */}
        <div className="card p-4 mx-auto my-4" style={{ maxWidth: 560 }}>
          <div className="row g-2">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="URL de imagen (opcional)"
                value={imagenUrl}
                onChange={(e) => setImagenUrl(e.target.value)}
              />
            </div>
            <div className="col-12 d-flex gap-2">
              <button onClick={handleGuardarNuevo} className="btn btn-danger w-100">➕ Agregar producto</button>
              {products.length === 0 && (
                <button onClick={restaurarDemo} className="btn btn-outline-secondary">🔄 Restaurar demo</button>
              )}
            </div>
          </div>
        </div>

        {/* Listado */}
        <div className="d-flex flex-wrap justify-content-center mt-4">
          {products.length === 0 ? (
            <div className="text-center">
              <p className="text-muted mb-3">No hay productos registrados.</p>
              <button onClick={restaurarDemo} className="btn btn-outline-secondary">🔄 Restaurar catálogo demo</button>
            </div>
          ) : (
            products.map((p) => (
              <div key={p.id} className="m-2">
                {editandoId === p.id ? (
                  // ======== Vista de EDICIÓN inline ========
                  <div className="card p-3" style={{ width: "18rem" }}>
                    <img
                      src={editImagenUrl || p.image}
                      alt="preview"
                      className="img-fluid rounded mb-2"
                      style={{ height: 220, objectFit: "cover" }}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Nombre"
                      value={editNombre}
                      onChange={(e) => setEditNombre(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Categoría"
                      value={editCategoria}
                      onChange={(e) => setEditCategoria(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="URL de imagen (opcional)"
                      value={editImagenUrl}
                      onChange={(e) => setEditImagenUrl(e.target.value)}
                    />
                    {/* Selector rápido de imágenes existentes */}
                    {availableImages.length > 0 && (
                      <select
                        className="form-select mb-2"
                        value=""
                        onChange={(e) => setEditImagenUrl(e.target.value)}
                      >
                        <option value="" disabled>Elegir imagen del catálogo…</option>
                        {availableImages.map((url) => (
                          <option key={url} value={url}>{url}</option>
                        ))}
                      </select>
                    )}

                    <div className="d-flex gap-2">
                      <button onClick={handleGuardarEdicion} className="btn btn-primary w-100">💾 Guardar</button>
                      <button onClick={cancelarEdicion} className="btn btn-outline-secondary w-100">✖️ Cancelar</button>
                    </div>
                  </div>
                ) : (
                  // ======== Vista NORMAL ========
                  <>
                    <ProductCard name={p.name} image={p.image} />
                    <div className="mt-2 d-flex gap-2">
                      <button onClick={() => handleEditar(p.id)} className="btn btn-sm btn-outline-primary">✏️ Editar</button>
                      <button onClick={() => handleEliminar(p.id)} className="btn btn-sm btn-outline-danger">❌ Eliminar</button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
