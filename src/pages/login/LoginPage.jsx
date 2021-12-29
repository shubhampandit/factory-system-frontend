import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginPage.css";

function LoginPage({ handleLogin, setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  useEffect(() => {
    setLogin(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loginPage">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="username"
            value={username}
            onChange={handleUserName}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Button type="submit" size="lg" variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
