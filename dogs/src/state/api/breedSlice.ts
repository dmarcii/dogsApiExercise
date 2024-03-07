import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import {URL, X_API_KEY} from "./config"

interface breedState {
  [key: string]: any  
}
const initialState: breedState = {
  value: [{}],
};

const breedSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDogBreeds.pending, () => {
        console.log("getDog.pending");
      })
      .addCase(
        getDogBreeds.fulfilled,
        (state, action: PayloadAction<breedState>) => {
          state.value = action.payload;
        }
      );
  },
});


export const getDogBreeds = createAsyncThunk(
  "breed/getBreeds",
  async (amount: Array<breedState>) => {
    try {
      const response = await axios.get(`${URL}/breeds`, {headers: {
        'x-api-key': X_API_KEY,
      }});
      const data = response.data;
      return (data)
    } catch (error) {
      console.error(error); 
    }
  }
);

export default breedSlice.reducer;