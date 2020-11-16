import {
  FETCH_SERVICES,
} from "../types";

export const servicesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return { items: action.payload };
    default:
      return state;
  }
};
