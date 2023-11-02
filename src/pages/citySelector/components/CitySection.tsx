import React from 'react'
// components
import CityItem from './CityItem'

interface CityNameType {
  name: string
}

interface PropType {
  title: string
  citys: CityNameType[]
}

export default function CitySection({ title, citys = [] }: PropType) {
  return (
    <ul className="city-ul">
      {
        <li className="city-li" key={title}>
          {title}
        </li>
      }
      {citys.map(city => {
        return (
          <>
            <CityItem key={city.name} name={city.name} />
          </>
        )
      })}
    </ul>
  )
}
