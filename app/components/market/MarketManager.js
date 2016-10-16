import React, { Component } from 'react';
import data from '../../data';
import MarketItem from './MarketItem';

class MarketManager extends Component {
  render() {
    const market = data.map(item => {
      return <MarketItem item={item} key={item.id}/>
    });

    return (
      <ul className="list-group">{market}</ul>
    );
  }
};

export default MarketManager;
