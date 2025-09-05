// Home page component for displaying main landing page content
import React, { useState } from "react";
import Header from "../layouts/shared/Header";
import { Col, Container, Row, Form } from "react-bootstrap";
import Footer from "../layouts/shared/Footer";
import STEP1 from "./comparesteps/step1";
import STEP2 from "./comparesteps/step2";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];

  const [pipeList, setPipeList] = useState([
    { id: 1, name: "Rigid Pipe", description: "Concrete pipe with superior structural strength", image: "/path/to/image1.png", checkStatus: true },
    { id: 2, name: "HDPE Pipe", description: "High-density polyethylene flexible pipe", image: "/path/to/image1.png", checkStatus: false },
    { id: 3, name: "PVC Pipe", description: "Polyvinyl chloride rigid plastic pipe", image: "/path/to/image1.png", checkStatus: false },
    { id: 4, name: "PP Pipe", description: "Polypropylene thermoplastic pipe", image: "/path/to/image1.png", checkStatus: false },
  ]);

    const toggleCheckbox = (id: number) => {
      setPipeList((prev) =>
        prev.map((pipe) =>
        pipe.id === id ? { ...pipe, checkStatus: !pipe.checkStatus } : pipe
        )
      );
    };


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
          <Row className="mb-4">
            <Col>
            <h2 className="info-title">Select Pipes to Compare</h2>
            <p className="info-text">Choose which pipe types you want to include in your cost comparison analysis.</p>
            </Col>
          </Row>
          <Form>
            <Row className="mb-4">
              <Col>
                <div className="step-indicator d-flex justify-content-center">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`step-item ${currentStep === step ? "active" : ""} ${
                        currentStep > step ? "completed" : ""
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>

        {currentStep === 1 && (
          <STEP1 togglecheckbox={toggleCheckbox} pipeLists={pipeList} />
        )}
         {currentStep === 2 && (
          <STEP2  togglecheckbox={toggleCheckbox} />
        )} 
        
            <Row>
              <Col className="text-center mt-4 d-flex justify-content-between align-items-center">
                 {currentStep === 1 && (
                  <>
                    <button className="submit-button">Submit Query</button>
                    <button
                      className="proceed-comparison ms-3"
                      onClick={() => setCurrentStep(2)}
                    >
                      Proceed to Comparison
                    </button>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <button
                      className="back-button"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </button>
                    <button className="next-button ms-3">Next</button>
                  </>
                )}
              </Col>
            </Row>
            </Form>
        </Container>
      </section>
    </div>
    <Footer />
    </>
    
  );
};

export default Home;
