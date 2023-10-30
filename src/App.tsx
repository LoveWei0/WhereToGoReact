import React from 'react'
import './App.css'

// component
import Header from './components/header'
import Journey from './components/journey'
import DepartDate from './components/departDate'

export default function App() {
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} />
      </div>
      <form action="./query.html" className="form">
        <Journey />
        <DepartDate />
      </form>
    </>
  )
}
