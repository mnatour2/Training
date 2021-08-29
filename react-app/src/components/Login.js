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

export default function Login() {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
          <Form
            method="POST"
            id="login-form"
            className="row g-3 needs-validation"
            novalidate
          >
            <h1 className="h1 mb-3 fw-normal text-center">Login</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button size="lg" as="input" type="submit" value="Login" />
            <div className="text-center">
              Don't have an account ? <Link to="/register">Free Register</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
