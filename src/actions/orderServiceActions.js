import {
  CREATE_ORDERSERVICE,
  CLEAR_SERVICEREQUEST,
  CLEAR_ORDERSERVICE,
  FETCH_ORDERSERVICES,
} from "../types";

export const createOrderService = (orderService) => (dispatch) => {
  fetch("/api/orderServices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderService),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDERSERVICE, payload: data });
      localStorage.clear("requestedServices");
      dispatch({ type: CLEAR_SERVICEREQUEST });
    });
};

export const clearOrderService = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDERSERVICE });
};

export const fetchOrderServices = () => (dispatch) => {
  fetch("/api/orderServices")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERSERVICES, payload: data });
    });
};
