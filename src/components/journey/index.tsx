import React from 'react'

// css
import './index.css'
// svg
import switchImg from '../../assets/images/switch.svg'
// hooks
import { useAppDispatch, useAppSelector } from '@app/hooks'
// store -> actions
import {
  showCitySelector,
  selectFrom,
  selectTo
} from '@store/slice/citySelector'

export default function Journey() {
  const dispatch = useAppDispatch()
  const from = useAppSelector(selectFrom)
  const to = useAppSelector(selectTo)
  return (
    <>
      <div className="journey">
        <div
          className="journey-station"
          onClick={() => dispatch(showCitySelector(true))}
        >
          <input
            type="text"
            className="journey-input journey-from"
            readOnly
            name="from"
            value={from}
          />
        </div>
        <div className="journey-switch">
          <img src={switchImg} alt="switch" width="70" height="40" />
        </div>
        <div
          className="journey-station"
          onClick={() => dispatch(showCitySelector(false))}
        >
          <input
            type="text"
            className="journey-input journey-to"
            readOnly
            value={to}
            name="to"
          />
        </div>
      </div>
    </>
  )
}
