import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

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
      const response = await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {
        'x-api-key': "live_2ud1wZmoYp94tsnCTIjNhYrklMlSyu0VzUorFSVlr6EqhZkHL0wIxYe282tlYhey",
      }});
      const data = response.data;
      return (data)
    } catch (error) {
      console.error(error); 
    }
  }
);

/* export const { increment, decrement, incrementByAmount } = breedSlice.actions; */

export default breedSlice.reducer;