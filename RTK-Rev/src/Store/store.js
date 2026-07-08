import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counterSlice" // we imported counterSlice.reducer

export const store = configureStore({
    reducer: {
        counter:counterReducer

    }
})