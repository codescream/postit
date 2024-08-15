import { configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "./reducers/parcels";
import usersReducer from "./reducers/users";
import authReducer from "./reducers/auth";

export default configureStore({
  reducer: {
    parcelsReducer,
    usersReducer,
    authReducer,
  }
});