import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => {
      return <Flat
        name= {flat.name}
        imageUrl= {flat.imageUrl}
        price= {flat.price}
        priceCurrency= {flat.priceCurrency}
        lat= {flat.lat}
        lng= {flat.lng}
      />
    })
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;


