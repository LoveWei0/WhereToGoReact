import React from 'react'
import './App.css'

// component
import Header from './components/header'
// svg
import switchImg from './assets/images/switch.svg'

export default function App() {
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} />
      </div>
      <form action="./query.html" className="form">
        <div className="journey">
          <div className="journey-station">
            <input type="text" className="journey-input journey-from" />
          </div>
          <div className="journey-switch">
            <img src={switchImg} alt="switch" width="70" height="40" />
          </div>
          <div className="journey-station">
            <input type="text" className="journey-input journey-to" />
          </div>
        </div>
      </form>
    </>
  )
}
