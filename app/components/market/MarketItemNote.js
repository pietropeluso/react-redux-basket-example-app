import React, { Component } from 'react';

class MarketItemNote extends Component {
  render() {
    const note = this.props.quantity === 1 ?
                `(you will add 1 element at a time)` :
                `(you will add ${this.props.quantity} elements at a time)`;
    return (
      <small>{note}</small>
    );
  }
};

MarketItemNote.PropTypes = {
  quantity: React.PropTypes.number.isRequired
};

export default MarketItemNote;
