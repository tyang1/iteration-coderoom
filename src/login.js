import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleLogin = e => {
    e.preventDefault();
    const login = document.getElementById("login-container");
    login.style.display === 'none' ? login.style.display = 'block' : login.style.display = "none";
  };
  render() {
    return (
      <div id="login-container">
        <form className="login-form">
          Username:
          <input />
          <br />
          Password:
          <input />
          <br />
          <button>Sign in</button>
          <br />
          <br />
          <button onClick={this.toggleLogin}>Continue as Guest</button>
        </form>
      </div>
    );
  }
}

export default Login;
