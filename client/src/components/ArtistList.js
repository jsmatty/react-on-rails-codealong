import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArtistList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      artists: []
    }
  }

  componentWillMount(){
    this._fetchArtists();
  }

  _fetchArtists = async () => {
    try {
      const res = await axios.get('/api/artists');
      if (res.headers['access-token']){
        localStorage.setItem("access-token", res.headers['access-token'])
        axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
      }
      await this.setState({artists: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      this.setState({error: err.message})
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        {this.state.artists.map(artist => (
          <Link to={`/artist/${artist.id}`} >{artist.name}</Link>
        ))}
      </div>
    );
  }
}

export default ArtistList;