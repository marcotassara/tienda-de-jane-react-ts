import { Routes, Route } from "react-router-dom"
import Navbar from "./sharedComponents/Navbar"
import Footer from "./sharedComponents/Footer"

// Páginas
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Productos from "./pages/Productos"
import Tiendas from "./pages/Tiendas"
import Acerca from "./pages/Acerca"
import Carrito from "./pages/Carrito"
import Checkout from "./pages/Checkout"
import Gracias from "./pages/Gracias"
import IngresoStock from "./pages/IngresoStock"

// Contexto del carrito
import { CartProvider } from "./context/CartContext"

// ErrorBoundary para capturar errores de runtime
import ErrorBoundary from "./sharedComponents/ErrorBoundary"

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/ingreso" element={<IngresoStock />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </CartProvider>
  )
}
