import React, { Component } from "react";
import { Form, Input, Button, Label} from 'semantic-ui-react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAcct: {
        username: "",
        email: "",
        password: ""
    },
  }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit =(e) => {
    e.preventDefault();
    console.log(this.state.createAcct);
  }

   handleInputChange =(e) =>{
    const {name,value} = e.target;
    console.log(value);
    this.setState(prevState => ({
      createAcct: {
        ...prevState.createAcct,
        [name]: value,
      }
    }))
  }

  render() {
    return (
      <div className="modal-background">
              <h2 className="signup-login-header">
                Welcome to Non-Profit Awake!
              </h2>
              <span className="close">&times;</span>
              <hr/>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Field>
                  <Label>Name or Organization Name</Label>
                  <Input 
                    className="signup-login-input"
                    placeholder="Username *"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required/>
                </Form.Field>
                <Form.Field>
                  <Label>Email </Label>
                  <Input className="signup-login-input"
                    placeholder="Email *"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required/>
                </Form.Field>
                <Form.Field>
                  <Label>Password</Label>
                  <Input 
                    className="signup-login-input"
                    placeholder="Password *"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required/>
                </Form.Field>
                <Button color='green' className="signup-login-button">Create Account</Button>
                </Form.Group> 
              </Form>
        </div>
    )
  }
}

export default Signup;