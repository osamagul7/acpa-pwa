// Home page component for displaying main landing page content
import React from "react";
import Header from "../layouts/shared/Header";
import { Col, Container, Row } from "react-bootstrap";

const Home: React.FC = () => {

  return (
    <>
    <Header />
    <div className="home-page">      

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <p className="hero-subtext">Installation</p>
              <h1 className="hero-title">COMPARE COST</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="info-section">
        <Container>
          <Row>
            <Col>
            <h2 className="info-title">Select Pipes to Compare</h2>
            <p className="info-text">Choose which pipe types you want to include in your cost comparison analysis.</p>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <div className="pipe-card">
                <img src="/images/pipe1.png" alt="Pipe Type 1" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
                <p className="pipe-description">Durable and long-lasting, ideal for various applications.</p>
                <button className="select-button">Select</button>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="pipe-card">
                <img src="/images/pipe1.png" alt="Pipe Type 1" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
                <p className="pipe-description">Durable and long-lasting, ideal for various applications.</p>
                <button className="select-button">Select</button>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="pipe-card">
                <img src="/images/pipe1.png" alt="Pipe Type 1" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
                <p className="pipe-description">Durable and long-lasting, ideal for various applications.</p>
                <button className="select-button">Select</button>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="pipe-card">
                <img src="/images/pipe1.png" alt="Pipe Type 1" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
                <p className="pipe-description">Durable and long-lasting, ideal for various applications.</p>
                <button className="select-button">Select</button>
              </div>
            </Col>
            </Row>
            <Row>
              <Col className="text-center mt-4 d-flex justify-content-between align-items-center">
                <button className="compare-button">Submit Query</button>
                <button className="reset-button ms-3">Procedd to Comparison</button>
              </Col>
            </Row>
        </Container>
      </section>
    </div>
    </>
    
  );
};

export default Home;
