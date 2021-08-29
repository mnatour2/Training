import React from "react";
import { Container, Form, Row, FloatingLabel } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="w-25">
      <Row>
        <main className="form-signin">
          <Form
            method="POST"
            id="login-form"
            className="row g-3 needs-validation"
            novalidate
          >
            <h1 className="h3 mb-3 fw-normal">Login</h1>
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
            <div className="form-check">
              <label className="form-check-label" for="flexCheckDefault">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary my-3" type="submit">
              Login
            </button>
            <div>
              Don't have an account ?<a href="/register">Free Register</a>
            </div>
          </Form>
        </main>
      </Row>
    </Container>
  );
}
