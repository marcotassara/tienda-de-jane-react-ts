import { Routes, Route } from 'react-router-dom'
import Navbar from './sharedComponents/Navbar'
import Footer from './sharedComponents/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Tiendas from './pages/Tiendas'
import Acerca from './pages/Acerca'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
      <Footer />
    </>
  )
}
