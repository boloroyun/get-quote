import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types";


export const wishListReducer = (
  state = {wishListItems: JSON.parse(localStorage.getItem("wishListItem") || "[]")},
  action
) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { wishListItems: action.payload.wishListItems };
    case REMOVE_FROM_WISHLIST:
      return { wishListItems: action.payload.wishListItems };
    default:
      return state;
  }
};