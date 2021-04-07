import SHOP_DATA from './Shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA //this is the main collections array
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;