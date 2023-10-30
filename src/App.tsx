import React, { useMemo } from 'react'
import './App.css'

// component
import Header from './components/header'
import Journey from './components/journey'
// utils
import { manageTime } from './utils/manageTimes'
// dayjs
import dayjs from 'dayjs'

export default function App() {
  const h0ofDepart = manageTime(Date.now())
  const departDate = new Date(h0ofDepart)
  const departDateString = useMemo(() => {
    return dayjs(h0ofDepart).format('YYYY-MM-DD')
  }, [h0ofDepart])
  const isToday = h0ofDepart === manageTime()
  const weekString =
    '周' +
    ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] +
    (isToday ? '今天' : '')
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} />
      </div>
      <form action="./query.html" className="form">
        <Journey />
        <div className="depart-date">
          <input type="hidden" name="date" value={departDateString} />
          {departDateString}
          <span className="depart-week">{weekString}</span>
        </div>
      </form>
    </>
  )
}
