import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleLogin = e => {
    e.preventDefault();
    const login = document.getElementById("login-container");
    login.style.display === 'none' ? login.style.display = 'block' : login.style.display = "none";
  }
  verifyUser = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/', {
      name: e.target.username.value,
      password: e.target.password.value,
    }).then(res => {
      if (res.data) this.toggleLogin();
      else alert('Invalid user information.');
    });
  }
  render() {
    return (
      <div id="login-container">
        <form className="login-form" onSubmit={this.verifyUser}>
          Username:
          <input name="username"/>
          <br />
          Password:
          <input name="password" type="password"/>
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
