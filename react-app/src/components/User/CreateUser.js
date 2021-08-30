import React from "react";
import {
  Container,
  Form,
  Row,
  FloatingLabel,
  Col,
  Button,
} from "react-bootstrap";

export default function CreateUser() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
          <Form method="POST" id="register-form" className="row g-3">
            <h1 className="h1 fw-normal text-center">Create a new user</h1>
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

            <Button size="lg" as="input" type="submit" value="Submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
