import React from "react";
import { Container, Form, Row, FloatingLabel } from "react-bootstrap";

export default function Register() {
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

            <div className="input-group col-md-12 text-start">
              <label for="registerPhoto" className="form-label col-md-12">
                Profile picture
              </label>
              <input
                name="picture"
                id="registerPhoto"
                type="file"
                className="form-control"
                aria-label="file example"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>

            <div className="col-12">
              <button
                className="w-100 btn btn-lg btn-primary my-2"
                type="submit"
              >
                Create
              </button>
            </div>
            <div className=" pt-0 mt-0">
              Already have an account ?<a href="/login">Login</a>
            </div>
          </Form>
        </main>
      </Row>
    </Container>
  );
}
