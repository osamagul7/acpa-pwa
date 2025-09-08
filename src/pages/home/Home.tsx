import React, { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../../layouts/shared/Header";
import { Col, Container, Row, Form } from "react-bootstrap";
import STEP1 from "../compare-steps/step1";
import { INITIAL_PIPES } from "../../utils/constant";
import type { PipeItem } from "../../types/home";
import { StepIndicator } from "./StepIndicator";
import STEP2 from "../compare-steps/step2";
import ConcretePipe from "../../assets/images/concrete_pipe.png";
import FlexiblePipe from "../../assets/images/flexible_pipe.png";
import STEPCOMPARE from "../compare-steps/step-compare";


const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [totalSteps, setTotalSteps] = useState<number>(2); // Total steps including comparison step

  const [pipeList, setPipeList] = useState<PipeItem[]>(INITIAL_PIPES);

  const toggleCheckbox = useCallback((id: number) => {
    setPipeList((prev) =>
      prev.map((pipe) =>
        pipe.id === id ? { ...pipe, checkStatus: !pipe.checkStatus } : pipe
      )
    );
  }, []);

  useEffect(() => {
    const checkedCount = pipeList.filter((pipe) => pipe.checkStatus).length;
    setTotalSteps(checkedCount+1);
  }, [pipeList]);

  const renderStep = () => {
    debugger;
    if (currentStep === 1) {
      return <STEP1 toggleCheckbox={toggleCheckbox} pipeLists={pipeList} />;
    } else if (currentStep === 2 && currentStep <= totalSteps) {
      return <STEP2 toggleCheckbox={toggleCheckbox} stepImage={ConcretePipe} />;
    } else if (currentStep === 3 && currentStep <= totalSteps) {
      return <STEP2 toggleCheckbox={toggleCheckbox} stepImage={FlexiblePipe} />;
    } else if (currentStep === 4 && currentStep <= totalSteps) {
      return <STEP2 toggleCheckbox={toggleCheckbox} stepImage={FlexiblePipe} />;
    } else if (currentStep > totalSteps) {
      return <STEPCOMPARE />;
    }
    return null; // fallback
  };

  return (
    <>
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
              {currentStep > 1 && (
                <Row className="mb-4">
                  <Col>
                    <StepIndicator
                      checkedPipe={pipeList}
                      currentStep={currentStep - 1}
                    />
                  </Col>
                </Row>
              )}

            {renderStep()}

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

                  {currentStep > 1 && (
                    <>
                      <button
                        type="button"
                        className="back-button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        aria-label="Go back"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        className="next-button ms-3"
                        onClick={() => setCurrentStep(currentStep + 1)}
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
    </>
  );
};

export default Home;
