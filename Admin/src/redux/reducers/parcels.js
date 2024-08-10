import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as parcelAPI from '../../api/parcels';

export const allParcels = createAsyncThunk('allParcels', async () => {
  try {
    const { data }  = await parcelAPI.fetchParcels();
    
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

export const deleteParcel = createAsyncThunk('deleteParcel', async (id) => {
  try {
    console.log("deleting parcel..");
    const { data } = await parcelAPI.deleteParcel(id);

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
    .addCase(deleteParcel.pending, (state, action) => {
      state.pending = true;
    })
    .addCase(deleteParcel.fulfilled, (state, action) => {
      state.data = action.payload.data;
    })
    .addCase(deleteParcel.rejected, (state, action) => {
      state.error = action.error;
    });
  }
});

export const { fetch, create } = parcelReducer.actions;
export default parcelReducer.reducer;