import { combineReducers, configureStore } from "@reduxjs/toolkit";
import InfoSlice from "../Infoslice/InfoSlice";
const reducer = combineReducers({
  infoUser: InfoSlice,
});

export const store = configureStore({
  reducer,
});

export default store;
