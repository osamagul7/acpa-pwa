import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import rigidPipe from "../../assets/images/rigid-pipe.png";

interface STEP1Props {
  checkStatus: boolean[];
  togglecheckbox: (index: number) => void;
}

const STEP1: React.FC<STEP1Props> = ({ checkStatus, togglecheckbox }) => {
  return (
    <>
      <Row>
        <Col md={3} className="mb-3">
            <div className="pipe-card">
                <img src={rigidPipe} alt="Pipe Type 0" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
                <p className="pipe-description"> Durable and long-lasting, ideal for various applications. </p>
                <button className="checkbox-btn" >
                    <span className="inner-circle">
                        <FaCheck className="check-icon" />
                    </span>
                </button>
            </div>
        </Col>
        {checkStatus.map((checked, index) => (
          <Col md={3} className="mb-3" key={index}>
            <div className="pipe-card">
              <img
                src={rigidPipe}
                alt={`Pipe Type ${index + 1}`}
                className="pipe-image"
              />
              <h3 className="pipe-name">Reinforced Concrete Pipe</h3>
              <p className="pipe-description">
                Durable and long-lasting, ideal for various applications.
              </p>
              <button
                className={`checkbox-btn ${checked ? "checked" : ""}`}
                onClick={() => togglecheckbox(index)}
              >
                <span className="inner-circle">
                  {checked && <FaCheck className="check-icon" />}
                </span>
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default STEP1;
