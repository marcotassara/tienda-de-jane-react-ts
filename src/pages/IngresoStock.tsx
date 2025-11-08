// src/pages/IngresoStock.tsx
import { useEffect, useState } from "react"
import type { Product } from "../data/products"
import { products as demo } from "../data/products"

// Normaliza por compatibilidad: asegura price/stock
const normalize = (p: any): Product & { price: number; stock: number } => ({
  id: p.id,
  name: p.name,
  image: p.image,
  category: p.category ?? "General",
  price: typeof p.price === "number" ? p.price : 1000,
  stock: typeof p.stock === "number" ? p.stock : 0,
})

export default function IngresoStock() {
  const [productos, setProductos] = useState<(Product & { price: number; stock: number })[]>([])
  const [idSel, setIdSel] = useState<number | "">("")
  const [precio, setPrecio] = useState<number>(1000)
  const [cantidad, setCantidad] = useState<number>(1)

  // Carga inicial: localStorage o siembra demo si está vacío
  useEffect(() => {
    const raw = localStorage.getItem("productos")
    let base: any[] = []
    try {
      base = raw ? JSON.parse(raw) : []
    } catch {
      base = []
    }

    if (!Array.isArray(base) || base.length === 0) {
      base = demo
      localStorage.setItem("productos", JSON.stringify(demo))
    }

    setProductos(base.map(normalize))
  }, [])

  // Persiste cada cambio
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos))
  }, [productos])

  const ingresar = () => {
    if (idSel === "" || cantidad <= 0 || precio < 0) return
    setProductos(prev =>
      prev.map(p => (p.id === idSel ? { ...p, price: precio, stock: p.stock + cantidad } : p))
    )
    setCantidad(1)
  }

  const restaurarDemo = () => {
    const seed = demo.map(normalize)
    setProductos(seed)
    localStorage.setItem("productos", JSON.stringify(seed))
    setIdSel("")
    setPrecio(1000)
    setCantidad(1)
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">📦 Ingreso de Stock</h2>

        <div className="card p-3">
          <div className="row g-3 align-items-end">
            <div className="col-md-6">
              <label className="form-label">Producto</label>
              <select
                className="form-select"
                value={idSel}
                onChange={e => setIdSel(e.target.value ? Number(e.target.value) : "")}
              >
                <option value="">Selecciona…</option>
                {productos.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} (stock: {p.stock})
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                min={0}
                className="form-control"
                value={precio}
                onChange={e => setPrecio(Math.max(0, Number(e.target.value) || 0))}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Cantidad</label>
              <input
                type="number"
                min={1}
                className="form-control"
                value={cantidad}
                onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))}
              />
            </div>

            <div className="col-12 d-flex gap-2">
              <button className="btn btn-outline-dark" onClick={ingresar}>
                ➕ Ingresar
              </button>
              <button className="btn btn-outline-secondary" onClick={restaurarDemo}>
                🔄 Restaurar demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
