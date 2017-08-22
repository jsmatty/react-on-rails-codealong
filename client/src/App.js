import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { setAxiosDefaults } from './utils';
import ArtistList from './components/ArtistList';
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import './App.css';


class App extends Component {
  componentWillMount() {
    setAxiosDefaults();
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
