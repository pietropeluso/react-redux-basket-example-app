import React, { Component } from 'react';

class MarketItemActions extends Component {
  render() {
    return (
      <span className="pull-right">
        <a href="" onClick={(e) => this.props.add(e, this.props.data)}>
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </a>
        <a href="" onClick={(e) => this.props.remove(e, this.props.data.id)}>
          <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </a>
      </span>
    );
  }
};

MarketItemActions.PropTypes = {
  data: React.PropTypes.object.isRequired,
  add: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired
};

export default MarketItemActions;
