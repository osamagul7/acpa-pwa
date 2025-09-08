import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import rigidPipe from "../../assets/images/rigid-pipe.png";
import type { STEP1Props } from "../../types/steps";

const STEP1: React.FC<STEP1Props> = ({ toggleCheckbox, pipeLists }) => {
  return (
    <>
      <Row>
        {pipeLists.map((listItem) => (
          <Col md={3} className="mb-3" key={listItem.id}>
            <div className="pipe-card">
              <img
                src={rigidPipe}
                alt={`Pipe Type ${listItem.id}`}
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
                  {listItem.checkStatus && <FaCheck className="check-icon" />}
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
