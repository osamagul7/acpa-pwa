import { Container, Nav, Navbar } from "react-bootstrap";
import { navLinks, topIcons, topLinks } from "../../utils/constant";

const Header = () => {
  return (
    <>
      <header className="top-bar">
        <Container className="d-flex justify-content-between">
          <div className="d-flex gap-3 small">
            {topLinks.map(({ label, href, show }) => (
              <a
                key={label}
                href={href}
                className={`text-link ${
                  show === "md" ? "d-none d-md-inline" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="d-flex gap-3">
            {topIcons.map(({ icon, href, show }) => (
              <a
                key={icon}
                href={href}
                className={`icon-link ${
                  show === "md" ? "d-none d-md-inline" : "d-md-none"
                }`}
              >
                <i className={`bi ${icon}`}></i>
              </a>
            ))}
          </div>
        </Container>
      </header>

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
            {navLinks.map((label) => (
              <Nav.Link key={label} href="#" className="nav-link-custom">
                {label}
              </Nav.Link>
            ))}
            {/* Extra search icon at the end */}
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
