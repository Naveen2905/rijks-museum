import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import ArtPieceDisplay from './components/ArtPieceDisplay.js'
class App extends Component {
  constructor() {
    super();

    this.state = {
      artPieces: [],
    }
  }

  componentDidMount() {
    const apiKey = 'lHr2r5rf';

    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      responseType: 'json',
      params: {
        key: apiKey,
      }
    }).then((response) => {
      console.log(response);
      this.setState({
        artPieces: response.data.artObjects,
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my fancy Art App</h1>
        {
          this.state.artPieces.map((eachArt, index) => {
            return (
              <ArtPieceDisplay art={eachArt}  key={index}></ArtPieceDisplay>
            )
          })
        }
      </div>
    );
  }
}

export default App;
