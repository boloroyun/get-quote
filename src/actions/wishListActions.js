import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types";

export const addToWishList = (product) => (dispatch, getState) => {
  const wishListItems = getState().wishList.wishListItems.slice();
  let alreadyExists = false;
  wishListItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists){
    wishListItems.push({...product, count : 1});
  }
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: {wishListItems},
  });
  localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
};

export const removeFromWishList = (product) => (dispatch, getState) => {
  const wishListItems = getState()
  .wishList.wishListItems.slice()
  .filter((x) => x._id !== product._id);
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: {wishListItems} });
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
};