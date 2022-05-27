import { CARS } from "./types";
import axios from "axios";
export const fetchCars = (avaliableAt, pickupTime, capacity) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:8000/api/v1/cars/filter?avaliableAt=${avaliableAt}&pickupTime=${pickupTime}&capacity=${capacity}`);
    console.log(res.data);
    dispatch({
      type: CARS,
      payload: res.data,
    });
  };
};
