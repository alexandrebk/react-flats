import React, { Component } from 'react';

import FLat from './flat.jsx';
import FLatList from './flat_list.jsx';
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
        <div className="left-scene">
          <FlatList flats={flats} />
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
