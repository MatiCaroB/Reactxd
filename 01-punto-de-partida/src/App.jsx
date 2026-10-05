
import Layout from './componentes/Layout.jsx'
import TarjetaProducto from './componentes/TarjetaProducto.jsx'
import { buscarProducto, productos } from './datos/productos.js'
import { Route,Routes } from 'react-router'
import Inicio from './componentes/Inicio.jsx' 
import Contacto from './componentes/Contacto.jsx'
import Nosotros from './componentes/Nosotros.jsx'
import NoEncontrada from './componentes/NoEncontrada.jsx'
export default function App() {
  

  return (
    <Routes>
      <Route path = "/" element = {<Layout/>}>
      <Route index element={<Inicio />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path ='*' element={< NoEncontrada/>}/>
      </Route>
    </Routes>

    
  )
}
