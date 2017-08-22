import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      newUser: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }
  _signUp = (e) => {
    // axios.post
  }
  _handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this._signUp}>
          <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
          <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
          <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
        </form>
      </div>
    );
  }
}

export default SignUp;