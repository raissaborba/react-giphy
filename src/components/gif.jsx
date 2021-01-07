import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e477cf98bcb09d0015591e454a24a963c9a9ebab04f&rid=giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
