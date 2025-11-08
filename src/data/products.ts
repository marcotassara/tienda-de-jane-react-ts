// Importamos las imágenes desde src/images
import coca1 from '../images/coca-cola1.25L.jpg'
import coca2 from '../images/coca-cola2L.jpg'
import coca3 from '../images/coca-cola3L.jpg'
import kem from '../images/Kem2.5L.jpg'
import pepsi from '../images/pepsicola2.5L.jpg'
import piri from '../images/piricola3L.jpg'
import naranja from '../images/pirinaranja3L.jpg'
import papalla from '../images/piripapalla3L.jpg'
import score from '../images/score591ML.jpg'
import fafita from '../images/fafita.webp'

export interface Product {
  id: number
  name: string
  image: string
  category: string
  price: number      // <—
  stock: number      // <—
}

// valores de ejemplo; ajusta a gusto
export const products: Product[] = [
  { id: 1, name: 'Coca-Cola 1.25L', image: coca1, category: 'Bebidas',     price: 1200, stock: 8 },
  { id: 2, name: 'Coca-Cola 2L',    image: coca2, category: 'Bebidas',     price: 1800, stock: 6 },
  { id: 3, name: 'Coca-Cola 3L',    image: coca3, category: 'Bebidas',     price: 2300, stock: 4 },
  { id: 4, name: 'Kem 2.5L',        image: kem,   category: 'Bebidas',     price: 1700, stock: 5 },
  { id: 5, name: 'Pepsi 2.5L',      image: pepsi, category: 'Bebidas',     price: 1700, stock: 5 },
  { id: 6, name: 'PiriCola 3L',     image: piri,  category: 'Bebidas',     price: 2200, stock: 3 },
  { id: 7, name: 'PiriNaranja 3L',  image: naranja, category: 'Bebidas',   price: 2200, stock: 3 },
  { id: 8, name: 'PiriPapalla 3L',  image: papalla, category: 'Bebidas',   price: 2200, stock: 3 },
  { id: 9, name: 'Score 591ML',     image: score, category: 'Energéticas', price: 1500, stock: 10 },
  { id:10, name: 'Fafita',          image: fafita, category: 'Jugos',      price: 800,  stock: 12 },
]
