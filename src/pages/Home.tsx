// Home page component for displaying main landing page content
import React, { useState } from "react";
import Header from "../layouts/shared/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../layouts/shared/Footer";
import STEP1 from "./comparesteps/step1";
import STEP2 from "./comparesteps/step2";

const Home: React.FC = () => {
  const [checkedStates, setCheckedStates] = useState([false, false, false]);
  const [currentStep, setCurrentStep] = useState(1);

    const toggleCheckbox = (index: any) => {
      setCheckedStates((prev) =>
        prev.map((state, i) => (i === index ? !state : state))
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

        {currentStep === 1 && (
          <STEP1 checkStatus={checkedStates} togglecheckbox={toggleCheckbox} />
        )}
         {currentStep === 2 && (
          <STEP2 checkStatus={checkedStates} togglecheckbox={toggleCheckbox} />
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
                    <button className="submit-button ms-3">Finalize</button>
                  </>
                )}
              </Col>
            </Row>
        </Container>
      </section>
    </div>
    <Footer />
    </>
    
  );
};

export default Home;
