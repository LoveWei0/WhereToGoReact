import React from 'react'
import CitySection from './CitySection'
import type { CityListType } from '@api/types/citiesType'

interface PropType {
  cityList: CityListType
}

const alphabet = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index)
})

export default function CityList({ cityList }: PropType) {
  return (
    <div className="city-list">
      <div className="city-cate">
        {cityList.map(section => {
          return (
            <CitySection
              title={section.title}
              citys={section.citys}
              key={section.title}
            />
          )
        })}
      </div>
      <div className="city-index">
        {alphabet.map(alpha => {
          return (
            <>
              <i className="city-index-item" key={alpha}>
                {alpha}
              </i>
            </>
          )
        })}
      </div>
    </div>
  )
}
