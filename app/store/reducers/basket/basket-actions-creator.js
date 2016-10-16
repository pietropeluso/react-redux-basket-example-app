import * as Actions from './basket-actions';

export const addElement = (item) => {
  return {
    type: Actions.ADD_ELEMENT,
    value: {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      discount: item.discount
    }
  };
}

export const removeElement = (id) => {
  return {
    type: Actions.REMOVE_ELEMENT,
    value: id
  };
}
