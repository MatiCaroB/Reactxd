
import Layout from './componentes/Layout.jsx'

import { Route,Routes } from 'react-router'
import Inicio from './componentes/Inicio.jsx' 
import Contacto from './componentes/Contacto.jsx'
import Nosotros from './componentes/Nosotros.jsx'
import NoEncontrada from './componentes/NoEncontrada.jsx'
import DetalleProducto from './componentes/DetalleProducto.jsx'
import Catalogo from './componentes/Catalogo.jsx'
export default function App() {
  

  return (
    <Routes>
      <Route path = "/" element = {<Layout/>}>
      <Route index element={<Inicio />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="catalogo" element={<Catalogo />} />
      <Route path="productos/:id" element={<DetalleProducto />} />
      <Route path ='*' element={< NoEncontrada/>}/>
      </Route>
    </Routes>

    
  )
}
