import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface StateType {
  isCityShow: boolean
  from: string
  to: string
  isDataShow: boolean
  isDateSelectorVisible: boolean
  currentSelectingLeftCity: boolean
}

const initialState: StateType = {
  isCityShow: false,
  from: '北京',
  to: '上海',
  isDataShow: false,
  isDateSelectorVisible: false,
  currentSelectingLeftCity: false
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    showCitySelector(state, action) {
      state.isCityShow = action.payload
    },
    hideCitySelector(state) {
      state.isCityShow = false
    },
    showDataSelector(state) {
      state.isDateSelectorVisible = true
    },
    hideDateSelector(state) {
      state.isCityShow = false
    },
    setFrom(state, action) {
      state.from = action.payload
    },
    setTo(state, action) {
      state.to = action.payload
    },
    setSelectedCity(state, actions) {
      if (state.currentSelectingLeftCity) {
        setFrom(actions.payload)
      } else {
        setTo(actions.payload)
      }
    }
  }
})

const selectIsCityShow = (state: RootState) => state.city.isCityShow
const selectFrom = (state: RootState) => state.city.from
const selectTo = (state: RootState) => state.city.to
const selectIsDate = (state: RootState) => state.city.isDateSelectorVisible
const selectIsDataShow = (state: RootState) => state.city.isDateSelectorVisible

export {
  selectIsCityShow,
  selectFrom,
  selectTo,
  selectIsDate,
  selectIsDataShow
}

export const {
  showCitySelector,
  hideCitySelector,
  showDataSelector,
  hideDateSelector,
  setFrom,
  setTo,
  setSelectedCity
} = citySlice.actions

export default citySlice.reducer
