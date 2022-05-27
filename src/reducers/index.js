import { combineReducers } from "redux";

import { carsReducer } from "./cars/cars";

export default combineReducers({
  carsReducer,
});
