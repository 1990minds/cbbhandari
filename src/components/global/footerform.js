
import React from "react";
import {  Form, Button } from 'react-bootstrap';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      loading:true
    };
  }

  render() {
    const { 
      
      status,
      loading
    
    
    } = this.state;
    return (


        <Form   onSubmit={this.submitForm}
    
        action="https://formspree.io/xqkdjzrg"

        method="POST">

{status === "ERROR" && <div class="alert alert-danger" role="alert">
  Error !
</div>}

        <Form.Group controlId="formBasicPassword">
        <Form.Control type="text" name="name" placeholder="Enter Name" required />
      </Form.Group>
     <Form.Group controlId="formBasicPassword">
        <Form.Control type="text" name="phone" placeholder="Enter PhoneNumber" required  />
      </Form.Group>
    
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email"  name="email" placeholder="Enter email" required  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1" style={{display:this.props.display}}>
    <Form.Control as="select" name="course">
      <option>PUC</option>
      <option>Degree</option>
    </Form.Control>
  </Form.Group>
    
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" name="message" rows="3" />
      </Form.Group>
   

      {status === "SUCCESS" ? <div class="alert alert-success" role="alert">
  Your Mail Sent!
</div> :    <Button variant="primary" disabled={loading? false : true} type="submit">
        {loading === true ? "Submit": "Sending..."}
      </Button>}
    </Form>

    );
  }

  submitForm(ev) {
    ev.preventDefault();

    this.setState({loading:false})
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({  status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}