import { ADD_TO_SERVICEREQUEST, REMOVE_FROM_SERVICEREQUEST } from "../types";

export const sendServiceRequest = (service) => (dispatch, getState) => {
  const serviceRequestItems = getState().serviceRequest.serviceRequestItems.slice();
  let alreadyExists = false;
  serviceRequestItems.forEach((y) => {
    if (y._id === service._id) {
      alreadyExists = true;
      y.count++;
    }
  });
  if (!alreadyExists) {
    serviceRequestItems.push({ ...service, count: 1 });
  }
  dispatch({
    type: ADD_TO_SERVICEREQUEST,
    payload: { serviceRequestItems },
  });
  localStorage.setItem(
    "serviceRequestItems",
    JSON.stringify(serviceRequestItems)
  );
};

export const removeFromServiceRequest = (service) => (dispatch, getState) => {
  const serviceRequestItems = getState()
    .serviceRequest.serviceRequestItems.slice()
    .filter((y) => y._id !== service._id);
  dispatch({
    type: REMOVE_FROM_SERVICEREQUEST,
    payload: { serviceRequestItems },
  });
  localStorage.setItem(
    "serviceRequestItems",
    JSON.stringify(serviceRequestItems)
  );
};

