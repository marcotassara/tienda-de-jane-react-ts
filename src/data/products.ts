// src/data/products.ts

// DEFINICIÓN DEL TIPO
export interface Product {
  id: number
  name: string
  image: string
  category: string
  price: number
  stock: number
}

// DATOS DE EJEMPLO (Ahora usando rutas de la carpeta public)
export const products: Product[] = [
  { 
    id: 1, 
    name: 'Coca-Cola 1.25L', 
    image: '/images/coca-cola1.25L.jpg', // <--- Mira, es texto, no variable
    category: 'Bebidas',     
    price: 1200, 
    stock: 8 
  },
  { 
    id: 2, 
    name: 'Coca-Cola 2L',    
    image: '/images/coca-cola2L.jpg', 
    category: 'Bebidas',     
    price: 1800, 
    stock: 6 
  },
  { 
    id: 3, 
    name: 'Coca-Cola 3L',    
    image: '/images/coca-cola3L.jpg', 
    category: 'Bebidas',     
    price: 2300, 
    stock: 4 
  },
  { 
    id: 4, 
    name: 'Kem 2.5L',        
    image: '/images/Kem2.5L.jpg',  
    category: 'Bebidas',     
    price: 1700, 
    stock: 5 
  },
  { 
    id: 5, 
    name: 'Pepsi 2.5L',      
    image: '/images/pepsicola2.5L.jpg', 
    category: 'Bebidas',     
    price: 1700, 
    stock: 5 
  },
  { 
    id: 6, 
    name: 'PiriCola 3L',     
    image: '/images/piricola3L.jpg',  
    category: 'Bebidas',     
    price: 2200, 
    stock: 3 
  },
  { 
    id: 7, 
    name: 'PiriNaranja 3L',  
    image: '/images/pirinaranja3L.jpg', 
    category: 'Bebidas',     
    price: 2200, 
    stock: 3 
  },
  { 
    id: 8, 
    name: 'PiriPapalla 3L',  
    image: '/images/piripapalla3L.jpg', 
    category: 'Bebidas',     
    price: 2200, 
    stock: 3 
  },
  { 
    id: 9, 
    name: 'Score 591ML',     
    image: '/images/score591ML.jpg', 
    category: 'Energéticas', 
    price: 1500, 
    stock: 10 
  },
  { 
    id: 10, 
    name: 'Fafita',          
    image: '/images/fafita.webp', 
    category: 'Jugos',       
    price: 800,  
    stock: 12 
  },
]