import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface CountState {
  jj: number
}

const initialState: CountState = {
  jj: 1
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {}
})

export const selectCount = (state: RootState) => state.count.jj

export default countSlice.reducer
