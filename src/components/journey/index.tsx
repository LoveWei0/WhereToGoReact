import React from 'react'

// css
import './index.css'
// svg
import switchImg from '../../assets/images/switch.svg'

export default function Journey() {
  return (
    <>
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
    </>
  )
}
