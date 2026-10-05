
import { Routes, Route, Link, useParams, useSearchParams } from 'react-router';

import { Card, Row, Col, Badge,ListGroup, Button, Alert, Form } from 'react-bootstrap';
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
  
  const [parametros, setParametros] = useSearchParams();
  const texto = parametros.get('buscar') ?? '';
  const categoria = parametros.get('categoria') ?? '';

  function actualizar(clave, valor) {
    const copia = new URLSearchParams(parametros);
    if (valor) copia.set(clave, valor); else copia.delete(clave);
    setParametros(copia);
  }

  const visibles = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(texto.toLowerCase()) &&
      (categoria === '' || p.categoria === categoria)
  );

  return (
    <div>
      <Row className="g-2 mb-3">
        <Col xs={12} md={8}>
          <Form.Control
            type="search"
            placeholder="Buscar producto…"
            value={texto}
            onChange={(e) => actualizar('buscar', e.target.value)}
          />
        </Col>
        <Col xs={12} md={4}>
          <Form.Select value={categoria} onChange={(e) => actualizar('categoria', e.target.value)}>
            <option value="">Todas</option>
            <option value="audio">Audio</option>
            <option value="computacion">Computación</option>
            <option value="hogar">Hogar</option>
          </Form.Select>
        </Col>
      </Row>

      <ListGroup>
        {visibles.map((p) => <ListGroup.Item key={p.id}>{p.nombre}</ListGroup.Item>)}
        {visibles.length === 0 && <ListGroup.Item>Sin resultados.</ListGroup.Item>}
      </ListGroup>
    </div>
  );
}


export default Catalogo;