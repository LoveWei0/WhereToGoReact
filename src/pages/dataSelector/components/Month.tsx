import React from 'react'

interface PropType {
  startingTimeInMonth: number
}

export default function Month({ startingTimeInMonth }: PropType) {
  console.log(startingTimeInMonth)
  const startDay = new Date(startingTimeInMonth)
  // const currentDay = new Date(startingTimeInMonth)
  return (
    <div className="data-table">
      <thead>
        <tr>
          <td colSpan={7}>
            <h5>
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
      </tbody>
    </div>
  )
}
