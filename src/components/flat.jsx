import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const src = this.props.imageUrl;
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Flat;
