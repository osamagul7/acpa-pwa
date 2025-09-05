import { Col, Container, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">            
            <Nav className="m-auto fw-semibold">
                    <Nav.Link href="#" className="nav-link-custom">All Rights reserved</Nav.Link>
                    <Nav.Link href="#" className="nav-link-custom">Login</Nav.Link>
                    <Nav.Link href="#" className="nav-link-custom">Faqs</Nav.Link>
                    <Nav.Link href="#" className="nav-link-custom">Contact The ACPA</Nav.Link>
                    <Nav.Link href="#" className="nav-link-custom">Heart From the ACPA</Nav.Link>
                    <Nav.Link href="#" className="nav-link-custom">Press & Media</Nav.Link>
                </Nav>
          </Col>
        </Row>
      </Container>
      </div>
    );
};

export default Footer;
