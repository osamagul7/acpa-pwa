import React, { useCallback, useMemo, useState } from "react";
import Header from "../../layouts/shared/Header";
import { Col, Container, Row, Form } from "react-bootstrap";
import Footer from "../../layouts/shared/Footer";
import STEP1 from "../compare-steps/step1";
import { INITIAL_PIPES } from "../../utils/constant";
import type { PipeItem } from "../../types/home";
import { StepIndicator } from "./StepIndicator";
import STEP2 from "../compare-steps/step2";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps = useMemo(() => [1, 2, 3], []);

  const [pipeList, setPipeList] = useState<PipeItem[]>(INITIAL_PIPES);

  const toggleCheckbox = useCallback((id: number) => {
    setPipeList((prev) =>
      prev.map((pipe) =>
        pipe.id === id ? { ...pipe, checkStatus: !pipe.checkStatus } : pipe
      )
    );
  }, []);

  return (
    <>
      <Header />

      <div className="home-page">
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
                <p className="info-text">
                  Choose which pipe types you want to include in your cost
                  comparison analysis.
                </p>
              </Col>
            </Row>

            <Form>
              <Row className="mb-4">
                <Col>
                  <StepIndicator steps={steps} currentStep={currentStep} />
                </Col>
              </Row>

              {currentStep === 1 && (
                <STEP1 toggleCheckbox={toggleCheckbox} pipeLists={pipeList} />
              )}
              {currentStep === 2 && <STEP2 toggleCheckbox={toggleCheckbox} />}

              <Row>
                <Col className="text-center mt-4 d-flex justify-content-between align-items-center">
                  {currentStep === 1 && (
                    <>
                      <button
                        type="button"
                        className="submit-button"
                        onClick={() => {}}
                      >
                        Submit Query
                      </button>

                      <button
                        type="button"
                        className="proceed-comparison ms-3"
                        onClick={() => setCurrentStep(2)}
                        aria-label="Proceed to comparison"
                      >
                        Proceed to Comparison
                      </button>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <button
                        type="button"
                        className="back-button"
                        onClick={() => setCurrentStep(1)}
                        aria-label="Go back"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        className="next-button ms-3"
                        onClick={() => {}}
                      >
                        Next
                      </button>
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
