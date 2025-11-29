import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 1. Estilos (La ropa) - YA LO TIENES
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. Funcionalidad (El cerebro) - ¡ESTA ES LA LÍNEA QUE FALTA! 👇
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)