import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: "catUrl",
    initialState: {
        url:"https://cdn2.thecatapi.com/images/54.jpg"
    },
    reducers: {
        setCatUrl: (state,action) => {
            state.url = action.payload
        }
    }
})

export const {setCatUrl} = catSlice.actions
export default catSlice.reducer