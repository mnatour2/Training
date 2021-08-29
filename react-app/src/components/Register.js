import React from "react";
import {
  Container,
  Form,
  Row,
  FloatingLabel,
  Button,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container fluid className="text-center">
      <Row>
        <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
          <Form
            method="POST"
            id="register-form"
            className="row g-3 needs-validation"
            novalidate
          >
            <h1 className="h1 fw-normal">Register</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Confirm Password"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Confirm Password" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-1"
            >
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Mobile number"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Mobile number" />
            </FloatingLabel>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" name="profilePic" />
            </Form.Group>
            <Button size="lg" as="input" type="submit" value="Register" />
            <div className=" pt-0 mt-0">
              Already have an account ? <Link to="/login">Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
