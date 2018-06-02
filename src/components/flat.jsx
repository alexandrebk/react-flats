import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div className="flat card active" style={{ width: "400px", backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${this.props.imageUrl}')` }}>
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2 onClick={console.log("==> debug")}> {this.props.name} <a class="card-link" href="#">TEST</a></h2>
        </div>
      </div>
    );
  }
}

export default Flat;
