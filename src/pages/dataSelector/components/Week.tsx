import React from 'react'
// utils
import { manageTime } from '@/utils/manageTimes'
// classnames
import classNames from 'classnames'

interface PropType {
  day: number[]
}

interface DaysType {
  days: PropType[]
}

const Day = ({ day }: any) => {
  if (!day) {
    return <td className="null"></td>
  }
  const classes = []
  const now = manageTime()
  if (day < now) {
    classes.push('disabled')
  }
  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push('weekend')
  }
  const dataString = now === day ? '今天' : new Date(day).getDate()
  return <td className={classNames(classes)}>{dataString}</td>
}

export default function Week({ days }: DaysType) {
  return (
    <tr className="data-table-days">
      {days.map((day, index) => {
        return <Day key={index} day={day} />
      })}
    </tr>
  )
}
