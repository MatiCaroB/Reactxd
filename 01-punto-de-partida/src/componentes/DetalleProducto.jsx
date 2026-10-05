import { useNavigate } from 'react-router'

export default function DetalleProducto() {
  const navegar = useNavigate()

  function agregar() {
    onAgregar(producto)
    navegar('/carrito')         
  }

  
}