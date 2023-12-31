import React from 'react'
// components
import Week from './Week'
interface PropType {
  startingTimeInMonth: number
}

export default function Month({ startingTimeInMonth }: PropType) {
  const startDay = new Date(startingTimeInMonth)
  const currentDay = new Date(startingTimeInMonth)
  let days = []
  while (currentDay.getMonth() === startDay.getMonth()) {
    days.push(currentDay.getTime())
    currentDay.setDate(currentDay.getDate() + 1)
  }
  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
    .fill(null)
    .concat(days)
  const lastDay = new Date(days[days.length - 1])
  days = days.concat(
    new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  )
  const weeks = []
  for (let row = 0; row < days.length / 7; ++row) {
    const week = days.slice(row * 7, (row + 1) * 7)
    weeks.push(week)
  }
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <td colSpan={7}>
              <h5>
                {' '}
                {startDay.getFullYear()}年{startDay.getMonth() + 1}月
              </h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="data-table-weeks">
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th className="weekend">周六</th>
            <th className="weekend">周日</th>
          </tr>
          {weeks.map((week, index) => {
            return <Week key={index} days={week} />
          })}
        </tbody>
      </table>
    </div>
  )
}
