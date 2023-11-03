import React, { useMemo } from 'react'
// components
import Header from '@/components/header'
import Month from './components/Month'
// classnames
import classnames from 'classnames'
// css
import './index.css'

export default function DataSelector() {
  const show = true
  const now = new Date()
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setMilliseconds(0)
  now.setDate(1)
  const monthSequence = useMemo(() => {
    return [now.getTime()]
  }, [now.getTime()])

  now.setMonth(now.getMonth() + 1)
  monthSequence.push(now.getTime())

  return (
    <div className={classnames('data-selector', { hidden: !show })}>
      <Header title="日期选择" />
      <div className="data-selector-tables">
        {monthSequence.map(month => {
          return <Month key={month} startingTimeInMonth={month} />
        })}
      </div>
    </div>
  )
}
