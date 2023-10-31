import React, { useEffect } from 'react'
// css
import './index.css'
// classnames
import classnames from 'classnames'
// store -> AsyncCitiesData
import { AsyncCitiesData } from '@/store/slice/citiesSlice'
// hooks
import { useAppSelector, useAppDispatch } from '@/app/hooks'
// store -> initialState
import { selectCityList, selectHotCities } from '@store/slice/citiesSlice'

export default function CitySelector() {
  const dispatch = useAppDispatch()
  const show = true
  useEffect(() => {
    dispatch(AsyncCitiesData())
  }, [])
  const cityList = useAppSelector(selectCityList)
  const hotCities = useAppSelector(selectHotCities)
  console.log(cityList)
  console.log(hotCities)
  return (
    <div className={classnames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back">
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="城市、车站的中文或拼英"
            className="search-input"
          />
        </div>
      </div>
      CitySelector
    </div>
  )
}
