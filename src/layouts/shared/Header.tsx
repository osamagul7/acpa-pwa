import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="top-bar">
        <Container className="d-flex">
          <div className="d-flex gap-3 small">
            <a href="#" className="text-link">
              LOG IN
            </a>
            <a href="#" className="text-link">
              FAQs
            </a>
            <a href="#" className="d-none d-md-inline text-link">
              CONTACT THE ACPA
            </a>
            <a href="#" className="d-none d-md-inline text-link">
              HEAR FROM THE ACPA
            </a>
            <a href="#" className="d-none d-md-inline text-link">
              PRESS & MEDIA
            </a>
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="d-none d-md-inline icon-link">
              <i className="bi bi-search"></i>
            </a>
            <a href="#" className="d-none d-md-inline icon-link">
              <i className="bi bi-person"></i>
            </a>
            <a href="#" className="d-md-none icon-link">
              <i className="bi bi-list fs-4"></i>
            </a>
          </div>
        </Container>
      </header>

      {/* Navbar */}
      <Navbar expand="md" className="main-navbar">
        <Container>
          <Navbar.Brand className="brand">
            <i className="bi bi-triangle-fill me-2 logo-icon"></i>
            ACPA
            <span className="brand-subtext d-none d-sm-inline">
              American Concrete Pipe Association
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#" className="nav-link-custom">
              Association
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Resources
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Education
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Why Concrete
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Events
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              QCAST
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Safety
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              <i className="bi bi-search"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
