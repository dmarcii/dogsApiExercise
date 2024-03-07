import {configureStore} from "@reduxjs/toolkit"
import dogsReducer from "./api/dogSlice"
import breedReducer from "./api/breedSlice"

export const store = configureStore({
    reducer: {
        dogApi: dogsReducer,
        breedApi: breedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch