import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const LoginSignup = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleModeChange = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      // Handle login logic
      console.log("Login with", email, password);
    } else {
      // Handle signup logic
      console.log("Sign up with", email, password);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">
                {mode === "login" ? "Login" : "Sign Up"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-4 w-100">
                  {mode === "login" ? "Login" : "Sign Up"}
                </Button>
              </Form>
              <p className="text-center mt-3">
                {mode === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <Button variant="link" onClick={handleModeChange}>
                  {mode === "login" ? "Sign Up" : "Login"}
                </Button>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
