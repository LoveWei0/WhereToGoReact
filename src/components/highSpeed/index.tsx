import React from 'react'
// css
import './index.css'
// classnames
import classnames from 'classnames'

export default function HighSpeed() {
  const highSpeed = false
  return (
    <>
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
    </>
  )
}
