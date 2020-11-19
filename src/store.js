import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { orderReducer } from "./reducers/orderReducers";
import { productsReducer } from "./reducers/productReducers";
import { wishListReducer } from "./reducers/wishListReducers";
import { servicesReducer} from "./reducers/serviceReducers";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    services: servicesReducer,
    wishList: wishListReducer,
    order: orderReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;