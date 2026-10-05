import { Nav, Navbar, Container } from "react-bootstrap"
import { Link, NavLink } from "react-router"

function Cabezera() {

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand> <Link to="/">Lo quieres, te lo vendo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotrosa</Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">Catalogo</Nav.Link>
            <Nav.Link as={NavLink} to="/DetalleProducto">Detalle producto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Cabezera