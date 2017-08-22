import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {
  constructor(){
    super();
    this.state = {
      artist: {},
      songs: []
    }
  }

  componentWillMount(){
    const artistId = this.props.match.params.id;
    axios.get(`/api/artists/${artistId}/songs`).then(res => {
      console.log(res.data)
      console.log(res.headers);
      if (res.headers['access-token']){
        localStorage.setItem("access-token", res.headers['access-token'])
        axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
      }
      this.setState({artist: res.data.artist, songs: res.data.songs})
    });
    
  }

  render() {
    return (
      <div>
        <img height="200" width="200" src={this.state.artist.photo_url} />
        <h1>{this.state.artist.name}</h1>
        {this.state.songs.map(song => (
          <div key={song.id}>
            <h4>{song.title}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Artist;