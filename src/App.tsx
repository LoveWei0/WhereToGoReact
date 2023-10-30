import React from 'react'
import './App.css'

// component
import Header from './components/header'
import Journey from './components/journey'
import DepartDate from './components/departDate'
// classnames
import classnames from 'classnames'

export default function App() {
  const highSpeed = false
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} />
      </div>
      <form action="./query.html" className="form">
        <Journey />
        <DepartDate />
        <div className="high-speed">
          <div className="high-speed-label">只看高铁/动车</div>
          <div className="high-speed-switch">
            <input type="hidden" name="highSpeed" />
            <div
              className={classnames('high-speed-track', {
                checked: highSpeed
              })}
            >
              <span
                className={classnames('high-speed-handle', {
                  checked: highSpeed
                })}
              ></span>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
