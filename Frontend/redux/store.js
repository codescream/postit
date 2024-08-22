import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "./reducers/auth";
import { packageApi } from "../services/api";

export const store = configureStore({
  reducer: {
    authReducer,
    [packageApi.reducerPath]: packageApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(packageApi.middleware)
})

setupListeners(store.dispatch);