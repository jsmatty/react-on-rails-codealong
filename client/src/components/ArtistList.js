import React, { Component } from 'react';
import axios from 'axios'
class ArtistList extends Component {
  constructor(){
    super();
    this.state = {
      artists: []
    }
  }

  componentWillMount(){
    this._fetchArtists();
  }

  _fetchArtists = async () => {
    const res = await axios.get('/api/artists');
    await this.setState({artists: res.data});
    return res.data;
  }

  render() {
    return (
      <div>
        {this.state.artists.map(artist => (
          <h1>{artist.name}</h1>
        ))}
      </div>
    );
  }
}

export default ArtistList;