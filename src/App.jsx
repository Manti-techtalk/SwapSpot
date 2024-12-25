import React, { useState } from 'react'
import {BrowserRouter,useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import MessagesPage from './pages/MessagesPage'

const AppRoutes = ()=>{
  const routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/browse',element:<Browse/>},
    {path:'/messege',element:<MessagesPage/>}
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
