import { configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "./reducers/parcels";
import usersReducer from "./reducers/users";

export default configureStore({
  reducer: {
    parcelsReducer,
    usersReducer
  }
});