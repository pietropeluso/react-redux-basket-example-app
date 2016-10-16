export const findElementById = (data, id) => {
  let idx = -1;
  data.forEach( (item, index) => {
    if (item.id === id) {
      idx = index;
    }
  });

  return idx;
};

