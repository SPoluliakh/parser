import { combineReducers } from "@reduxjs/toolkit";
import phonesReducer from "./slices/phones";

const rootReducer = combineReducers({
  test: () => ({}),
  phones: phonesReducer,
});

export default rootReducer;