import React, { Component } from 'react';

class BasketItem extends Component {
  render() {
    return (
      <tr>
         <td>{this.props.quantity}</td>
         <td>{this.props.name}</td>
         <td>{this.props.price}</td>
         <td>{(this.props.price * this.props.quantity * this.props.discount).toFixed(2)}</td>
       </tr>
    );
  }
};

BasketItem.PropTypes = {
  quantity: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  discount: React.PropTypes.number.isRequired
};

export default BasketItem
