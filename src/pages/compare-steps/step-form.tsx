import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import type { Step2Props } from "../../types/steps";
import { step2Fields } from "../../utils/constant";

const STEP2: React.FC<Step2Props> = ({stepImage}) => {
  return (
    <Row className="steps-section p-4 bg-white rounded-4 shadow-sm">
      <div className="mb-4 text-center">
        <h4 className="mb-4">Concrete Pipe Trench Detail</h4>
        <img
          src={stepImage}
          alt="Concrete Pipe"
        />
      </div>
      {step2Fields.map((field, idx) => (
        <Col key={idx} md={4} className="mb-3">
          <Form.Group className="mb-3" controlId={`field-${field.name}`}>
            <Form.Label>{field.label}</Form.Label>

            {field.type === "input" ? (
              <Form.Control type={field.inputType} name={field.name} />
            ) : (
              <Form.Select name={field.name}>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Form.Select>
            )}
          </Form.Group>
        </Col>
      ))}
    </Row>
  );
};

export default STEP2;
