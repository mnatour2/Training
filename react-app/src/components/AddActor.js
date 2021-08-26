import React from "react";
import { Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function AddActor() {
  return (
    <Container className="justify-content-center w-50 ">
      <Row>
        <h4 className="text-center">Add a new Actor.</h4>
      </Row>
      <Row>
        <Form className="form-signin">
          <FloatingLabel controlId="floatingSelect" label="Full Name">
            <Form.Control type="text"></Form.Control>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Date of birth">
            <Form.Control type="date"></Form.Control>
          </FloatingLabel>
          <div class="mb-3">
            <Form.Label className="form-label">
              Default file input example
            </Form.Label>
            <Form.Control
              class="form-control"
              type="file"
              id="formFile"
            ></Form.Control>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
