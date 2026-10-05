
import { Routes, Route, Link, useParams } from 'react-router';
import { ListGroup, Button, Alert } from 'react-bootstrap';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { productos } from '../datos/productos';

function Catalogo() {
  return (
    <ListGroup>
      {productos.map((p) => (
        <ListGroup.Item key={p.id} action as={Link} to={`/productos/${p.id}`}>
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
    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6}>
        <Card className="h-100 shadow-sm">
          <Card.Body className="d-flex flex-column">
            <div className="fs-1 text-center">{producto.emoji}</div>
            <Card.Title className="h6">{producto.nombre}</Card.Title>
            <Badge bg="light" text="dark" className="align-self-start mt-auto">
              {producto.categoria}
            </Badge>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}



function Demo() {
  return (

    <Routes>
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/productos/:id" element={<Detalle />} />
    </Routes>

  );
}

export default Catalogo;