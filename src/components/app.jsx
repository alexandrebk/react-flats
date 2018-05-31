import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import SimpleMap from './simple_map.jsx';
import flats from '../../data/flats'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: "",
      selectedFlatLng: ""
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container" style={{ height: '100vh', width: '100%' }}>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
