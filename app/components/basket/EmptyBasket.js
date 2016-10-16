import React, { Component } from 'react';

class EmptyBasket extends Component {
  render() {
    return (
      <div className="text-center">Sorry, your basket is currently empty, please add at least one item.</div>
    );
  }
};

export default EmptyBasket;
