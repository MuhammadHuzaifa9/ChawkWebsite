import React from 'react'
import { Route, Router, Routes } from 'react-router'
import { router } from './components/Routes/Router'


const App = () => {
  
  return (
    <div>
      <Routes>
         {router?.map((item,index)=>(<Route key={index} path={item.path} element={item.element}/>))}
      </Routes>
    </div>
  )
}

export default App
