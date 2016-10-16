import React, { Component } from 'react';
import BasketItem from './BasketItem';

const calculateTotal = (data) => {
  let total = 0;
  data.forEach(item => {
    total += item.quantity * item.price * item.discount;
  });

  return total.toFixed(2);
};

class ValidBasket extends Component {
  render() {
    const data = this.props.basketItems;
    const basket = data.map(item => {
        return <BasketItem key={item.id}
                       quantity={item.quantity}
                       name={item.name}
                       price={item.price}
                       discount={item.discount} />
      });

    const total = calculateTotal(data);

    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td className="col-md-1">Quantity</td>
              <td className="col-md-6">Item</td>
              <td className="col-md-3">Price per item</td>
              <td className="col-md-2">Total</td>
            </tr>
          </thead>
          <tbody>
            {basket}
          </tbody>
        </table>
        <div>
          <span className="pull-right">Total: {total}</span>
        </div>
      </div>
    );
  }
};

ValidBasket.PropTypes = {
  basketItems: React.PropTypes.array.isRequired
};

export default ValidBasket;
