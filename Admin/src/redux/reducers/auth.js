import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "../../api/auth";

export const registerUser = createAsyncThunk("registerUser", async (userData) => {
  try {
    const { data } = await authAPI.addUser(userData);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

const authReducer = createSlice({
  name: "auth",
  initialState: {
    data: [],
    isloading: false,
    error: null
  },
  reducers: {
    fetch: (state, action) => {},
    create: (state, action) => {},
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isloading = true;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload.data;
      state.isloading = false;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.error = action.error;
      state.isloading = false;
      throw new Error(state.error);
    })
  }
});

export const { fetch, create } = authReducer.actions;
export default authReducer.reducer;