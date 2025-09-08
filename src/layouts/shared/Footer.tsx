import { Col, Container, Nav, Row } from "react-bootstrap";
import { footerLinks } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <Nav className="m-auto fw-semibold justify-content-center flex-wrap">
              {footerLinks.map(({ label, href }) => (
                <Nav.Link key={label} href={href} className="nav-link-custom">
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
