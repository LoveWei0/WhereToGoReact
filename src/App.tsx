import React from 'react'
import './App.css'

// common -> component
import Header from './components/header'
import Journey from './components/journey'
import DepartDate from './components/departDate'
import HighSpeed from './components/highSpeed'
import Submit from './components/submit'
// pages -> components
import CitySelector from './pages/citySelector/index'

export default function App() {
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} />
      </div>
      <form action="./query.html" className="form">
        <Journey />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector />
    </>
  )
}
