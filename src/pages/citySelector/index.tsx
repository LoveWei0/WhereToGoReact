import React from 'react'
// css
import './index.css'
// classnames
import classnames from 'classnames'
import { getCitiesData } from '@/api/cities'

export default function CitySelector() {
  const show = true
  const handleClick = async () => {
    const result = await getCitiesData()
    console.log(result)
  }
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
      <button onClick={handleClick}>请求</button>
    </div>
  )
}
