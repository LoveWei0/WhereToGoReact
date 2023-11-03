import React from 'react'

interface PropType {
  startingTimeInMonth: number
}

const weeksData = [
  { weekName: '周一' },
  { weekName: '周二' },
  { weekName: '周三' },
  { weekName: '周四' },
  { weekName: '周五' },
  { weekName: '周六' },
  { weekName: '周日' }
]

export default function Month({ startingTimeInMonth }: PropType) {
  const startDay = new Date(startingTimeInMonth)
  // const currentDay = new Date(startingTimeInMonth)
  // const [days, setDays] = useState<any>([])
  // while (currentDay.getMonth() === startDay.getMonth()) {
  //   days.push(currentDay.getTime())
  //   currentDay.setDate(currentDay.getDate() + 1)
  // }

  // setDays(
  //   new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
  //     .fill(null)
  //     .concat(days)
  // )
  // const lastDay = new Date(days[days.length - 1])
  // setDays(
  //   days.concat(
  //     new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  //   )
  // )
  // const weeks = []
  // for (let row = 0; row < days.length / 7; ++row) {
  //   const week = days.slice(row * 7, (row + 1) * 7)
  //   weeks.push(week)
  // }
  const YearOrMonth = () => {
    return (
      <tr>
        <td colSpan={7}>
          {startDay.getFullYear()}年{startDay.getMonth() + 1}月
        </td>
      </tr>
    )
  }

  const WeeksData = () => {
    return (
      <>
        {weeksData.map((weeks, index) => {
          return (
            <tr className="data-table-weeks" key={index}>
              {/* <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th className="weekend">周六</th>
          <th className="weekend">周日</th> */}
              {/* {weeksData.map((week, index) => {
          return <th key={index}>{week.weekName}</th>
        })} */}
              <th>{weeks.weekName}</th>
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
          <YearOrMonth />
        </thead>
        <tbody>
          <WeeksData />
        </tbody>
      </table>
    </div>
  )
}
