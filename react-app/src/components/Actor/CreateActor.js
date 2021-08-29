import React from "react";
import {
  Container,
  Form,
  Row,
  FloatingLabel,
  Col,
  Button,
} from "react-bootstrap";

export default function CreateActor() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
          <Form
            method="POST"
            id="register-form"
            className="row g-3 needs-validation"
            novalidate
          >
            <h1 className="h1 fw-normal text-center">Create a new Actor</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Full Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Date of birth"
              className="mb-1"
            >
              <Form.Control type="date" placeholder="Date of birth" />
            </FloatingLabel>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" />
            </Form.Group>
            <Button size="lg" as="input" type="submit" value="Submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
