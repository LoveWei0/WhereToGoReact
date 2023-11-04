import React, { useMemo } from 'react'
// components
import Header from '@/components/header'
import Month from './components/Month'
// classnames
import classnames from 'classnames'
// css
import './index.css'
// hooks
import { useAppDispatch } from '@app/hooks'
// store -> actions
import { hideDateSelector } from '@store/slice/citySelector'

interface PropType {
  show: boolean
}

export default function DataSelector({ show }: PropType) {
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

  const dispatch = useAppDispatch()

  const onBack = () => {
    dispatch(hideDateSelector)
  }

  return (
    <div className={classnames('data-selector', { hidden: !show })}>
      <Header title="日期选择" onBack={onBack} />
      <div className="data-selector-tables">
        {monthSequence.map(month => {
          return <Month key={month} startingTimeInMonth={month} />
        })}
      </div>
    </div>
  )
}
