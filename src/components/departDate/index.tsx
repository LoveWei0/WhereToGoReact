import React, { useMemo } from 'react'

// css
import './index.css'
// utils
import { manageTime } from '../../utils/manageTimes'
// dayjs
import dayjs from 'dayjs'

export default function DepartDate() {
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
      <div className="depart-date">
        <input type="hidden" name="date" value={departDateString} />
        {departDateString}
        <span className="depart-week">{weekString}</span>
      </div>
    </>
  )
}
