import { ADD_TO_SERVICEREQUEST, REMOVE_FROM_SERVICEREQUEST } from "../types";

export const serviceRequestReducer = (
  state = {
    serviceRequestItems: JSON.parse(
      localStorage.getItem("serviceRequestItem") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_SERVICEREQUEST:
      return { serviceRequestItems: action.payload.serviceRequestItems };
    case REMOVE_FROM_SERVICEREQUEST:
      return { serviceRequestItems: action.payload.serviceRequestItems };
    default:
      return state;
  }
};
