import { createStore } from 'redux';
import reducers from './store/index';

const store = createStore(reducers);

export default store;