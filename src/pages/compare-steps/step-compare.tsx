import React from "react";
import { Col, Row } from "react-bootstrap";
import RigidPipe from "../../assets/images/pipes/RCP.svg";
import HDPEPipe from "../../assets/images/pipes/HDPE.svg";
import PVCPipe from "../../assets/images/pipes/PVC.svg";
import PPPipe from "../../assets/images/pipes/PP.svg";

const STEPCOMPARE: React.FC = () => {
  return (
    <Row className="">
        <Col md={4} className="mb-3">
          <div className="pipe-card text-start active_card">
            <Row className="pipe-image-wrapper">
              <Col md={3}>
                <img src={RigidPipe} alt="Rigid Pipe" className="pipe-image" />
              </Col>
              <Col md={9} className="text-start">
               <h3 className="pipe-name">Concrete Pipe</h3>
              </Col>
              <Col md={12}>
                <p className="pipe-description text-start">Concrete pipes are strong and durable, suitable for heavy-duty applications.</p>
              </Col>
            </Row>
            <div className="pipe-cost-details w-100">
              <table className="table p-0">
                <tbody>
                  <tr>
                    <td>Installation Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Performance:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Installation:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Post Installation Inspection:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Service Life:</td>
                    <td>60 Years</td>
                  </tr>
                  <tr>
                    <td>Sustainability:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>100 Year Ownership Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Customer Rating:</td>
                    <td>XYZ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="pipe-card text-start">
            <Row className="pipe-image-wrapper text-start">
              <Col md={3}>
                <img src={HDPEPipe} alt="Rigid Pipe" className="pipe-image" />
              </Col>
              <Col md={9} className="text-start">
               <h3 className="pipe-name">HDPE Pipe</h3>
              </Col>
              <Col md={12}>
                <p className="pipe-description text-start">Concrete pipes are strong and durable, suitable for heavy-duty applications.</p>
              </Col>
            </Row>
            <div className="pipe-cost-detail w-100">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Installation Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Performance:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Installation:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Post Installation Inspection:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Service Life:</td>
                    <td>60 Years</td>
                  </tr>
                  <tr>
                    <td>Sustainability:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>100 Year Ownership Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Customer Rating:</td>
                    <td>XYZ</td>
                  </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="pipe-card text-start">
            <Row className="pipe-image-wrapper">
              <Col md={3}>
                <img src={PVCPipe} alt="Rigid Pipe" className="pipe-image" />
              </Col>
              <Col md={9} className="text-start">
               <h3 className="pipe-name">PVC Pipe</h3>
              </Col>
              <Col md={12}>
                <p className="pipe-description text-start">Concrete pipes are strong and durable, suitable for heavy-duty applications.</p>
              </Col>
            </Row>
            <div className="pipe-cost-details w-100">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Installation Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Performance:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Installation:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Post Installation Inspection:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>Service Life:</td>
                    <td>60 Years</td>
                  </tr>
                  <tr>
                    <td>Sustainability:</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td>100 Year Ownership Cost:</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Customer Rating:</td>
                    <td>XYZ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
    </Row>
  );
};

export default STEPCOMPARE;
