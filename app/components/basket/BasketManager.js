import React, { Component } from 'react';
import store from '../../store';
import {groupBy, flatMap} from 'lodash';
import EmptyBasket from './EmptyBasket';
import ValidBasket from './ValidBasket';

const aggregateDataFromState = (stateData) => {
  const aggregatedData = groupBy(stateData, (item) => item.id );
  const result = flatMap(aggregatedData, items => {
    return Object.assign({}, items[0], {
      quantity: items.length * items[0].quantity
    });
  });

  return result;
};

class BasketManager extends Component {
  render() {
    let basket;
    const aggrData = aggregateDataFromState(store.getState().basket);

    if (aggrData.length) {
      basket = <ValidBasket basketItems={aggrData} />
    } else {
      basket = <EmptyBasket />
    }

    return (
      <div>{basket}</div>
    );
  }
};

export default BasketManager;
