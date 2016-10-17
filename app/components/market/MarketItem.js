import React, { Component } from 'react';
import MarketItemNote from './MarketItemNote';
import MarketItemActions from './MarketItemActions';
import store from '../../store';
import { addElement, removeElement } from '../../store/reducers/basket/basket-actions-creator';

class MarketItem extends Component {
  addItemToBasket(evt, item) {
    evt.preventDefault();
    store.dispatch(addElement(item));
  }

  removeItemFromBasket(evt, id) {
    evt.preventDefault();
    store.dispatch(removeElement(id));
  }

  render() {
    const data = this.props.item;
    return (
      <li className="list-group-item">
        <strong>{data.name}</strong> <span>({data.price} ct) </span>
        <MarketItemNote quantity={data.quantity} discount={data.discount} />
        <MarketItemActions add={this.addItemToBasket} remove={this.removeItemFromBasket} data={data} />
      </li>
    );
  }
};

MarketItem.PropTypes = {
  item: React.PropTypes.object.isRequired
};

export default MarketItem;
