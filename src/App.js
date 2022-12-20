import React, { useEffect } from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import { useSelector } from 'react-redux'
import Charts from './components/Charts/Charts'
import HomePage from './components/HomaPage/HomePage'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { dataSliceActions, getDummyjson, getFakestore, getJsonplaceholder } from './components/store/dataSlice'

const App = () => {


  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
      <BrowserRouter>
        <Routes>
          {(isLoggedIn || localStorage.getItem('myemail')) && <Route path='/' element={<HomePage />} />}

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/charts' element={<Charts />} />


          <Route path='/auth' element={<AuthPage />} />

          <Route path="*" element={<Navigate to='/auth' replace />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App



