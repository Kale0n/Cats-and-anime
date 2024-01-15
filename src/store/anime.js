import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        data :{
            title:'Attack on Titan',
            character:'Hannes',
            quote:"You couldn’t save your mom because you… weren’t strong enough. I didn’t face the Titan… because I wasn’t brave enough."
        }
    },
    reducers: {
        setAnimeData: (state,action) => { 
            state.data = action.payload
        }
    }
})

export const {setAnimeData} = animeSlice.actions
export default animeSlice.reducer