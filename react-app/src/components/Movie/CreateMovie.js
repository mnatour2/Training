import React from "react";
import {
  Container,
  Form,
  Row,
  FloatingLabel,
  Col,
  Button,
} from "react-bootstrap";

export default function CreateMovie() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
          <Form method="POST" id="register-form" className="row g-3">
            <h1 className="h1 fw-normal text-center">Create a new Movie</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="Movie Name"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Movie Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Year"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Year" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Counrty"
              className="mb-1"
            >
              <Form.Control type="text" placeholder="Counrty" />
            </FloatingLabel>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Poster</Form.Label>
              <Form.Control type="file" name="poster" />
            </Form.Group>

            <Button size="lg" as="input" type="submit" value="Submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
