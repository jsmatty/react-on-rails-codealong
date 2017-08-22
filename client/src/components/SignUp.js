import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
        email: '',
        password: '',
        password_confirmation: '',
        redirect: false
    }
  }

  _signUp = async (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    const response = await axios.post('/auth', payload)
    console.log(response);
    localStorage.setItem("access-token", response.headers['access-token'])
    localStorage.setItem("client", response.headers.client)
    localStorage.setItem("uid", response.headers.uid)
    localStorage.setItem("expiry", response.headers.expiry)
    axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
    axios.defaults.headers.client = localStorage.getItem("client"); 
    axios.defaults.headers.uid = localStorage.getItem("uid"); 
    axios.defaults.headers.expiry = localStorage.getItem("expiry"); 
    this.setState({redirect: true})
  }

  _signIn = async (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    }
    const response = await axios.post('/auth/sign_in', payload)
    console.log(response);
    localStorage.setItem("access-token", response.headers['access-token']);
    localStorage.setItem("client", response.headers.client);
    localStorage.setItem("uid", response.headers.uid);
    localStorage.setItem("expiry", response.headers.expiry);
    axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
    axios.defaults.headers.client = localStorage.getItem("client"); 
    axios.defaults.headers.uid = localStorage.getItem("uid"); 
    axios.defaults.headers.expiry = localStorage.getItem("expiry"); 
    this.setState({redirect: true})
  }

  _handleChange = (e) => {
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    if (this.state.redirect){
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this._signUp}>
          <div>
            <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
          </div>
          <div>
            <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
          </div>
          <div>
            <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
          </div>
          
          <button>sign up</button>
          <button onClick={this._signIn}>sign in</button>
        </form>
      </div>
    );
  }
}

export default SignUp;