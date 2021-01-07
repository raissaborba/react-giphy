import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e477cf98bcb09d0015591e454a24a963c9a9ebab04f&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
