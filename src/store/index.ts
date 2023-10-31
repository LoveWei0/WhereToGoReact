import { configureStore } from '@reduxjs/toolkit'

// slice
import citiesSlice from './slice/citiesSlice'

const store = configureStore({
  reducer: {
    cities: citiesSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
