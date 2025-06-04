import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo.svg" alt="Elin Thoen Jakobsen Logo" width="160" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
