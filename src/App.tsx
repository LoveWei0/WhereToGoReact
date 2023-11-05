import React, { useCallback } from 'react'
import './App.css'

// common -> component
import Header from './components/header'
import Journey from './components/journey'
import DepartDate from './components/departDate'
import HighSpeed from './components/highSpeed'
import Submit from './components/submit'
// pages -> components
import CitySelector from './pages/citySelector/index'
import DataSelector from './pages/dataSelector/index'
// hooks
import { useAppSelector } from '@app/hooks'
// store -> citySelector
import { selectIsCityShow, selectIsDataShow } from '@store/slice/citySelector'

export default function App() {
  const isCityShow = useAppSelector(selectIsCityShow)
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  const isDataShow = useAppSelector(selectIsDataShow)
  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <Journey />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector show={isCityShow} />
      <DataSelector show={isDataShow} />
    </>
  )
}
