import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import MarketManager from './components/market/MarketManager';
import BasketManager from './components/basket/BasketManager';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Cart management application written using React and Redux</h1>
        <hr />
        <div className="col-md-6 col-sm-12">
          <MarketManager />
        </div>
        <div className="col-md-6 col-sm-12">
          <BasketManager />
        </div>
      </div>
    );
  }
};

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// subscribe to store changes
store.subscribe(render);

// render App
render();
