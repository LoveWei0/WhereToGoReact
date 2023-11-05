import React from 'react'
// components
import Week from './Week'
interface PropType {
  startingTimeInMonth: number
}

const weeksData = [
  { weekName: '周一', color: { color: '' } },
  { weekName: '周二', color: { color: '' } },
  { weekName: '周三', color: { color: '' } },
  { weekName: '周四', color: { color: '' } },
  { weekName: '周五', color: { color: '' } },
  { weekName: '周六', color: { color: '#ff9036' } },
  { weekName: '周日', color: { color: '#ff9036' } }
]

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
  const WeeksData = () => {
    return (
      <>
        {weeksData.map((weeks, index) => {
          return (
            <tr className="data-table-weeks" key={index}>
              <th style={weeks.color}>{weeks.weekName}</th>
            </tr>
          )
        })}
      </>
    )
  }
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <td colSpan={7}>
              {startDay.getFullYear()}年{startDay.getMonth() + 1}月
            </td>
          </tr>
        </thead>
        <tbody>
          <WeeksData />
          {weeks.map((week, index) => {
            return <Week key={index} days={week} />
          })}
        </tbody>
      </table>
    </div>
  )
}
