import { configureStore } from '@reduxjs/toolkit'
import catReducer from './catUrl'
import animeReducer from './anime'

export default configureStore({  reducer: {
    catUrl: catReducer,
    anime: animeReducer
 }
})