import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    password: ""
  })

  const handlechange = () =>{

  }

  return (
    <Container>
      <h1>Login Form</h1>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email" 
            value={formData.email} 
            onChange={handlechange}
            required
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
            required={true}
          />
        </Form.Group>
        <Button variant="primary">Login</Button>
      </Form>
       <p>Are you new here.. ? <Link to="/"> SignUp</Link></p>
       </Container>
  );
}

export default Login;
