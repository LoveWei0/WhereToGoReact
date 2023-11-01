import React from 'react'
import CitySection from './CitySection'
import type { CityListType } from '@api/types/citiesType'

interface PropType {
  cityList: CityListType
}

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
    </div>
  )
}
