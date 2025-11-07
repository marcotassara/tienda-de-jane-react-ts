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
}

export const products: Product[] = [
  { id: 1, name: 'Coca-Cola 1.25L', image: coca1, category: 'Bebidas' },
  { id: 2, name: 'Coca-Cola 2L', image: coca2, category: 'Bebidas' },
  { id: 3, name: 'Coca-Cola 3L', image: coca3, category: 'Bebidas' },
  { id: 4, name: 'Kem 2.5L', image: kem, category: 'Bebidas' },
  { id: 5, name: 'Pepsi 2.5L', image: pepsi, category: 'Bebidas' },
  { id: 6, name: 'PiriCola 3L', image: piri, category: 'Bebidas' },
  { id: 7, name: 'PiriNaranja 3L', image: naranja, category: 'Bebidas' },
  { id: 8, name: 'PiriPapalla 3L', image: papalla, category: 'Bebidas' },
  { id: 9, name: 'Score 591ML', image: score, category: 'Energéticas' },
  { id: 10, name: 'Fafita', image: fafita, category: 'Jugos' },
]
