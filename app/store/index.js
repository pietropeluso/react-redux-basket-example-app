import { combineReducers } from 'redux';

// Reducers
import basketReducer from './reducers/basket/basket-reducer';

// Combine Reducers
var reducers = combineReducers({
    basket: basketReducer
});

export default reducers;