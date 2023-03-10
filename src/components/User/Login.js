import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
function Login() {
  return (
    <Form>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <br /> <br /> <br /> <br /> <br />
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;