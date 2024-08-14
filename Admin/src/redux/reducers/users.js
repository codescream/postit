import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../../api/users";

export const allUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await userAPI.allUsers();
    
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});


const userReducer = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: [],
  },
  reducers: {
    fetch: (state, action) => {},
    create: (state, action) => {}
  },
  extraReducers: builder => {
    builder.addCase(allUsers.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(allUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(allUsers.rejected, (state, action) => {
      state.error = action.error;
    })
  }
});

export const { fetch, create } = userReducer.actions;
export default userReducer.reducer;
