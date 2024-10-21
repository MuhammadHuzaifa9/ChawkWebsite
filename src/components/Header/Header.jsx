import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Product from '../../pages/Product'
import Contact from '../../pages/Contact'

const Header = () => {
    const navigate=useNavigate()
  return (
    <div className='flex justify-around items-center'>
      <div className='w-40 '><img src="./logo (1).svg" alt=""  /></div>
      <div className=''><ul className='flex gap-10'>
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('/Products')}>Product</li>
        <li onClick={()=>navigate('/Contact')}>Contact</li>
        </ul></div>
    </div>
  )
}

export default Header
