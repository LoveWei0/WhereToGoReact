import { configureStore } from '@reduxjs/toolkit'

// slice
import countSlice from './slice/countSlice'

const store = configureStore({
  reducer: {
    count: countSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
