import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import React from 'react'
import ProductView from '../ProductView/ProductView';

const Login = () => {


  

  
 

  return ( 
<Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <br /> <br /> <br /> <br /> <br />
        <h1><b>Login Here</b></h1>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        <br />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>

      <a class="button" href="\">
      <Button variant="primary" >
        login
      </Button>
      </a>

    </Form>	
  );

}



export default Login;