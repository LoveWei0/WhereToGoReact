import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface StateType {
  show: boolean
  from: string
  to: string
}

const initialState: StateType = {
  show: false,
  from: '北京',
  to: '上海'
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

const selectShow = (state: RootState) => state.city.show
const selectFrom = (state: RootState) => state.city.from
const selectTo = (state: RootState) => state.city.to

export { selectShow, selectFrom, selectTo }

export const { showCitySelector, hideCitySelector } = citySlice.actions

export default citySlice.reducer
