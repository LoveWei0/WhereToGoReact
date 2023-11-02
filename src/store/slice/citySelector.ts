import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface StateType {
  show: boolean
}

const initialState: StateType = {
  show: false
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    showCitySelector(state, action) {
      state.show = action.payload
    },
    hideCitySelector(state) {
      state.show = false
      console.log(state.show)
    }
  }
})

export const selectShow = (state: RootState) => state.city.show

export const { showCitySelector, hideCitySelector } = citySlice.actions

export default citySlice.reducer
