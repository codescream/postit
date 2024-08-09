import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as parcelAPI from '../../api/parcels';

export const allParcels = createAsyncThunk('allParcels', async () => {
  try {
    const { data }  = await parcelAPI.fetchParcels();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});


const parcelReducer = createSlice({
  name: 'parcels',
  initialState: {
    isLoading: false,
    data: [],
    error: []
  },
  reducers: {
    fetch: (state, action) => {

    },
    create: (state, action) => {

    }
  },
  extraReducers(builder) {
    builder.addCase(allParcels.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(allParcels.fulfilled, (state, action) => {
      state.data = action.payload.parcels;
      state.isLoading = false;
    })
    .addCase(allParcels.rejected, (state, action) => {
      state.error = action.error;
    })
  }
});

export const { fetch, create } = parcelReducer.actions;
export default parcelReducer.reducer;