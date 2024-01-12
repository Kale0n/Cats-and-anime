import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        data :{
            title:'',
            character:'',
            quote:''
        }
    },
    reducers: {
        setAnimeData: (state,action) => { //вот здесь пока не очень понятно. 
            state.data = action.payload
        }
    }
})

export const {setAnime} = animeSlice.actions
export default animeSlice.reducer