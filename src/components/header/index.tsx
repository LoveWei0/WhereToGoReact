import React from 'react'
import './index.css'

interface TitleType {
  title: string
}

export default function Header({ title }: TitleType) {
  return (
    <>
      <div className="header">
        <div className="header-back">
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 15,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <h1 className="header-title">{title}</h1>
      </div>
    </>
  )
}