
import { useParams, useNavigate } from 'react-router';

const DetalleProducto = () => {
  
  const { id } = useParams(); 
  
  const navigate = useNavigate(); 
  function agregar() {
    onAgregar(producto)
    navegar('/carrito')          
  }
}






export default DetalleProducto;