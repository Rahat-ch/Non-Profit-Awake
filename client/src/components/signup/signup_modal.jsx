import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div id="signup-login" className="modal">
            <div className="modal-signup-login-form">
              <h2 className="signup-login-header">
                Welcome to Non-Profit Awake!
              </h2>
              <span className="close">&times;</span>
              <hr/>
              <form onSubmit={this.handleSubmit}>
                <input 
                  className="signup-login-input"
                  type="text"
                  placeholder="Username *"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                  required
                  />
                <input 
                  className="signup-login-input"
                  type="text"
                  placeholder="Email *"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  required
                  />
                <input 
                  className="signup-login-input"
                  type="text"
                  placeholder="Password *"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  required
                  />
                <button className="signup-login-button">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;