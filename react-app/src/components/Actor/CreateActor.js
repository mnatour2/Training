import React from "react";
import { Container, Form, Row, FloatingLabel } from "react-bootstrap";

export default function CreateActor() {
  return (
    <Container className="w-25">
      <Row>
        <main className="form-signin">
          <Form
            method="POST"
            id="register-form"
            className="row g-3 needs-validation"
            novalidate
          >
            <h1 className="h1 fw-normal">Create a new Actor</h1>
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

            <div className="input-group col-md-12 text-start">
              <label for="image" className="form-label col-md-12">
                Image
              </label>
              <input
                name="image"
                id="image"
                type="file"
                className="form-control"
                aria-label="file example"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>

            <div className="col-12">
              <button
                className="w-100 btn btn-lg btn-primary my-3"
                type="submit"
              >
                Create
              </button>
            </div>
          </Form>
        </main>
      </Row>
    </Container>
  );
}
