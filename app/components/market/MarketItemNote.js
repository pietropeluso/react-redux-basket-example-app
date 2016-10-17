import React, { Component } from 'react';

class MarketItemNote extends Component {
  render() {
    let note = '';
    if (this.props.quantity === 1) {
      note = '(you will add 1 element at a time)';
    } else {
      const discount = ((1 - this.props.discount) * 100).toFixed();
      note = `(you will add ${this.props.quantity} elements at a time with a ${discount}% discount)`
    }
               `(you will add ${this.props.quantity} elements at a time with a ${(1 - this.props.discount) * 100}% discount)`;
    return (
      <small>{note}</small>
    );
  }
};

MarketItemNote.PropTypes = {
  quantity: React.PropTypes.number.isRequired,
  discount: React.PropTypes.number.isRequired
};

export default MarketItemNote;
