import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth';

export const signin = createAsyncThunk("signin", async (userData) => {
  try {
    const { data } = await authAPI.authenticate(userData);

    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    data: [],
    error: [],
    isLoading: false
  },
  reducers: {
    fetch: (state, action) => {},
    create: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(signin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(signin.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    })
  }
});

export const { fetch, create }  = authReducer.actions;
export default authReducer.reducer;