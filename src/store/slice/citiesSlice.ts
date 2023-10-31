import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
// api
import { getCitiesData } from '@api/index'
import { CitiesData } from '@api/types/citiesType'

export const AsyncCitiesData = createAsyncThunk('/cities', async () => {
  const result = await getCitiesData()
  return result
})

const initialState: CitiesData = {
  hotCities: [],
  cityList: []
}

const CitiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(AsyncCitiesData.fulfilled, (state, action) => {
      const { hotCities, cityList } = action.payload
      state.cityList = cityList
      state.hotCities = hotCities
    })
})

export const selectHotCities = (state: RootState) => state.cities.hotCities
export const selectCityList = (state: RootState) => state.cities.cityList

export default CitiesSlice.reducer
