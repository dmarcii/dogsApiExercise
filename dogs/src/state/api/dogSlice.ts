import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

interface dogState {
  [key: string]: any  
}

const initialState: dogState = {
  value: {},
};

const dogSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDogBreedById.pending, () => {
        console.log("getDog.pending");
      })
      .addCase(
        getDogBreedById.fulfilled,
        (state, action: PayloadAction<object>) => {
          state.value = action.payload;
        }
      )
  },
});

export const getDogImg = createAsyncThunk(
  "dog/getDogImg",
  async (imgId: string) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/images/${imgId}`, {headers: {
        'x-api-key': "live_2ud1wZmoYp94tsnCTIjNhYrklMlSyu0VzUorFSVlr6EqhZkHL0wIxYe282tlYhey",
      }});
      const data = response.data;
      return (data)
    } catch (error) {
      console.error(error); 
    }
  }
);

export const getDogBreedById = createAsyncThunk(
  "breed/getDogBreedById",
  async (id: number) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`, {headers: {
        'x-api-key': "live_2ud1wZmoYp94tsnCTIjNhYrklMlSyu0VzUorFSVlr6EqhZkHL0wIxYe282tlYhey",
      }});
      const data = response.data;

      const fetchImg = await axios.get(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`, {headers: {
        'x-api-key': "live_2ud1wZmoYp94tsnCTIjNhYrklMlSyu0VzUorFSVlr6EqhZkHL0wIxYe282tlYhey",
      }});
      
      const imgURL = fetchImg.data.url
      const newData = {...data, url: imgURL}
      return (newData)
    } catch (error) {
      console.error(error); 
    }
  }
);


export default dogSlice.reducer;