import * as Actions from './basket-actions';
import { findElementById } from '../../../utilities';

const reducer = (state = [], action) => {
  switch(action.type) {
    case Actions.ADD_ELEMENT:
      return state.concat([action.value]);

    case Actions.REMOVE_ELEMENT:
      const index = findElementById(state, action.value);
      if (index !== -1) {
        return state.slice(0, index).concat(state.slice(index + 1, state.length));
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default reducer;
