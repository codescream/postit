import { configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "./reducers/parcels";

export default configureStore({
  reducer: {
    parcelsReducer
  }
});