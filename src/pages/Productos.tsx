import { products } from '../data/products'
import ProductCard from '../sharedComponents/ProductCard'

export default function Productos() {
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="mt-2">
          Tenemos muchos productos para ti, indaga en nuestra página web y ve ¡todas nuestras mercaderías!
        </p>

        <div className="d-flex flex-wrap justify-content-center mt-4">
          {products.map(p => (
            <ProductCard key={p.id} name={p.name} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
