import React from "react";
import { Col, Row } from "react-bootstrap";
import type { STEP1Props } from "../../types/steps";
import { FiCheck } from "react-icons/fi";

const STEP1: React.FC<STEP1Props> = ({ toggleCheckbox, pipeLists }) => {
  return (
    <>
      <Row>
        {pipeLists.map((listItem) => (
          <Col md={3} className="mb-3" key={listItem.id}>
            <div className="pipe-card">
              <img
                src={listItem.image}
                alt={`Pipe Type ${listItem.name}`}
                className="pipe-image"
              />
              <h3 className="pipe-name">{listItem.name}</h3>
              <p className="pipe-description">{listItem.description}</p>
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={listItem.checkStatus}
                  onChange={() => toggleCheckbox(listItem.id)}
                />
                <span className="custom-check">
                  {listItem.checkStatus && <FiCheck className="check-icon" />}
                </span>
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default STEP1;
