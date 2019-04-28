import React, { Component } from "react";
import Login from "../login/login_modal";
import Signup from "../signup/signup_modal";
import {Modal, Button} from "semantic-ui-react";

class SignupModal extends Component {
  render() {
    return (
      <div id="Signupmodal">
        <Modal trigger={<Button color="red">Sign Up</Button>}></Modal>
      </div>
    )
  }
}

export default SignupModal;