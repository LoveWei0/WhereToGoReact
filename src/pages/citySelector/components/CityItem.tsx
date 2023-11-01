import React from 'react'

interface PropType {
  name: string
}

export default function CityItem({ name }: PropType) {
  return <li className="city-li">{name}</li>
}
