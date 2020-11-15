const { CREATE_ORDERSERVICE, CLEAR_ORDERSERVICE, FETCH_ORDERSERVICES } = require("../types");

const orderServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDERSERVICE:
      return { orderService: action.payload };
    case CLEAR_ORDERSERVICE:
      return { orderService: null };
    case FETCH_ORDERSERVICES:
      return { orderServices: action.payload };
    default:
      return state;
  }
};

export { orderServiceReducer };
