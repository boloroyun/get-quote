import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { orderReducer } from "./reducers/orderReducers";
import { productsReducer } from "./reducers/productReducers";
import { wishListReducer } from "./reducers/wishListReducers";
import { orderServiceReducer } from "./reducers/orderServiceReducers";
import { servicesReducer } from "./reducers/serviceReducers";
import { serviceRequestReducer } from "./reducers/serviceRequestReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    wishList: wishListReducer,
    order: orderReducer,
    services: servicesReducer,
    serviceRequest: serviceRequestReducer,
    orderService: orderServiceReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;