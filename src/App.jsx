import React from 'react'
import { Route, Router, Routes } from 'react-router'
import { router } from './components/Routes/Router'


const App = () => {
  console.log({router})
  return (
    <div>
      <Routes>
         {router?.map((item,index)=>(<Route path={item.path} element={item.element}/>))}
      </Routes>
    </div>
  )
}

export default App
