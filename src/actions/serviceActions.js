import { FETCH_SERVICES } from "../types";

export const fetchServices = () => async (dispatch) => {
  const res = await fetch("/api/services");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_SERVICES,
    payload: data,
  });
};

