import React from "react";
import { Container, Form, Row, FloatingLabel } from "react-bootstrap";

export default function CreateMovie() {
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
            <h1 className="h1 fw-normal">Create a new Movie</h1>
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

            <div className="input-group col-md-12 text-start">
              <label for="poster" className="form-label col-md-12">
                Poster
              </label>
              <input
                name="poster"
                id="poster"
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
