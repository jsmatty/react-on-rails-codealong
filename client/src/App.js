import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ArtistList from './components/ArtistList'
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import './App.css';
 
class App extends Component {
  componentWillMount(){
    const access = localStorage.getItem("access-token")
    console.log(access);
    axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
    axios.defaults.headers.client = localStorage.getItem("client"); 
    axios.defaults.headers.uid = localStorage.getItem("uid"); 
    axios.defaults.headers.expiry = localStorage.getItem("expiry"); 
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/">Artists</Link>
            <Link to="/signUp">Sign Up</Link>
          </div>
          <Route exact path="/" component={ArtistList} />
          <Route path="/artist/:id" component={Artist} />
          <Route exact path="/signUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
