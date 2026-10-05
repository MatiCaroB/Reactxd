import { Routes, Route, Link, useParams } from 'react-router';
import { ListGroup, Button, Alert } from 'react-bootstrap';

const productos = [
  { id: 1, nombre: 'Audífonos Onda',        precio: 39990 },
  { id: 2, nombre: 'Parlante Roca',         precio: 54990 },
  { id: 3, nombre: 'Teclado Cordillera',    precio: 74990 },
];

function Catalogo() {
  return (
    <ListGroup>
      {productos.map((p) => (
        <ListGroup.Item key={p.id} action as={Link} to={`/producto/${p.id}`}>
          {p.nombre}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function Detalle() {
  const { id } = useParams();
  // Number(id) es imprescindible: id llega como texto.
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <Alert variant="danger">No existe el producto {id}.</Alert>;
  }

  return (
    <div>
      <h5>{producto.nombre}</h5>
      <p>Precio: ${producto.precio.toLocaleString('es-CL')}</p>
      <Button as={Link} to="/catalogo" variant="outline-secondary" size="sm">Volver</Button>
    </div>
  );
}

function Demo() {
  return (
    <Routes>
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/producto/:id" element={<Detalle />} />
    </Routes>
  );
}