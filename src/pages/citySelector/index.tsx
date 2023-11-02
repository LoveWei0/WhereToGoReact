import React, { useEffect, useMemo, useState } from 'react'
// css
import './index.css'
// classnames
import classnames from 'classnames'
// store -> Async
import { AsyncCitiesData } from '@/store/slice/citiesSlice'
// hooks
import { useAppSelector, useAppDispatch } from '@/app/hooks'
// store -> initialState
import { selectCityList, selectHotCities } from '@store/slice/citiesSlice'
// store -> actions
import { hideCitySelector } from '@store/slice/citySelector'
// components
import CityList from './components/CityList'
// api
import { getSearch } from '@/api/search'
// type
import type { ResultData } from '@api/types/searchType'

interface PropType {
  show: boolean
}

export default function CitySelector({ show }: PropType) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(AsyncCitiesData())
  }, [])
  const cityList = useAppSelector(selectCityList)
  const hotCities = useAppSelector(selectHotCities)
  console.log(hotCities)
  const cictesBoolean = () => {
    if (cityList.length) {
      return <CityList cityList={cityList} />
    }
    return <div>error</div>
  }
  const [searchKey, setSearchKey] = useState<string>('')
  const [inputData, setInputData] = useState<ResultData>()
  const key = useMemo(() => {
    return searchKey.trim()
  }, [searchKey])
  const handleClick = async (e: any) => {
    if (e === 'Enter') {
      const { result } = await getSearch(searchKey)
      setInputData(result)
    }
  }
  const onBack = () => dispatch(hideCitySelector())

  return (
    <div className={classnames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back bg-red-500" onClick={onBack}>
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
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            onKeyDown={e => handleClick(e.key)}
          />
        </div>
      </div>
      {Boolean(key) && (
        <div className="city-suggest">
          <ul className="city-suggest-ul">
            {inputData?.map(item => {
              return (
                <li className="city-suggest-li" key={item.display}>
                  {item.display}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {cictesBoolean()}
    </div>
  )
}
