import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import rigidPipe from "../../assets/images/rigid-pipe.png";

interface STEP2Props {
  checkStatus: boolean[];
  togglecheckbox: (index: number) => void;
}

const STEP2: React.FC<STEP2Props> = ({ checkStatus, togglecheckbox }) => {
  return (
    <>
      <Row>
        <Col md={3} className="mb-3">
            <div className="pipe-card">
                <img src={rigidPipe} alt="Pipe Type 0" className="pipe-image" />
                <h3 className="pipe-name">Reinforced Concrete Pipe 555</h3>
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

export default STEP2;
