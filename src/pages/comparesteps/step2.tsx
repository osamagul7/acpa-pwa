import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import rigidPipe from "../../assets/images/rigid-pipe.png";

interface STEP2Props {
  togglecheckbox: (index: number) => void;
}

const STEP2: React.FC<STEP2Props> = ({ togglecheckbox }) => {
  return (
    <>
      <Row>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Pipe Size (in.)</Form.Label>
                    <Form.Control type="number" name="pipe_size" />
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="number" name="pipe_class" />
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Quantity (LF)</Form.Label>
                    <Form.Control type="number" name="pipe_quantity" />
                </Form.Group>
          </Col>

          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Cost $/LF</Form.Label>
                    <Form.Control type="number" name="pipe_quantity" />
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Bedding Soil</Form.Label>
                     <Form.Select aria-label="Default select example">
                        <option value="1">Sandy Slit</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Cost $/Ton Delivered</Form.Label>
                    <Form.Control type="number" name="pipe_quantity" />
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Embedment Soil</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Gravelly Sand</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Cost $/Ton Delivered</Form.Label>
                    <Form.Control type="number" name="pipe_quantity" />
                </Form.Group>
          </Col>
      </Row>
    </>
  );
};

export default STEP2;
