import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
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
              <h2 className="signup-login-header">Welcome back!</h2>
              <span className="close">&times;</span>
              <hr/>
              <form onSubmit={this.handleSubmit}>
                <input 
                className="signup-login-input"
                type="text"
                placeholder="Email"
                onChange={this.handleInput("email")}
                value={this.state.email}
                required/>
                <input 
                  className="signup-login-input"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInput("password")}
                  value={this.state.password}
                  required/>
                <button id="login-button" className="signup-login-button">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;