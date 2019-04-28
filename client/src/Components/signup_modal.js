import React, { Component } from "react";
import Login from "./login_modal";
import Signup from "./signupForm";
import {Modal, Button} from "semantic-ui-react";


class SignupModal extends Component {
  constructor(props){
    super(props);
    this.state ={
      clickedSignUp: false
    }
  }

  // let checkUserClick = (e) =>{
  //   e.preventDefault();

  // }
  render() {
    return (
      <div id="Signupmodal">
        <Modal trigger={<Button color="blue">Sign Up</Button>}>
          <Modal.Content Scrolling>
            <Signup 
            onChange={this.props.onChange}
            value={this.props.value}
            />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default SignupModal;