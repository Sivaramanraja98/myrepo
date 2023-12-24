import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <Container className="container">
      <h1>Registeration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handlechange}
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handlechange}
            required="true"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handlechange}
            required="true"
          />
        </Form.Group>
        <Button variant="primary">Register</Button>
      </Form>
      <p>
        Already had an account ? <Link to="login"> Login</Link>{" "}
      </p>
    </Container>
  );
};

export default SignUp;
