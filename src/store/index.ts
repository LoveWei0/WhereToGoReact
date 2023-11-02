import { configureStore } from '@reduxjs/toolkit'

// slice
import citiesSlice from './slice/citiesSlice'
import citySlice from './slice/citySelector'

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    city: citySlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
