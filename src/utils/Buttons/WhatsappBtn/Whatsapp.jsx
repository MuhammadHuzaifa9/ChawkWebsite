import React from 'react'

const Whatsapp = ({select}) => {
  return (
    <div className='inline border-2 border-green-500 rounded-lg p-1  text-white bg-green-500 hover:text-blue-700 hover:shadow-green hover:shadow-lg  '>
      <a className='' href={`https://api.whatsapp.com/send?phone=${923162439623}&text=I'm interested in buying this product  "${select.title.split(' ').slice(0,4).join(' ')}"   Price $${select.price}` } target='_blank' rel='noopener noreferrer'><span className=' cursor-pointer '>Buy on Whatsapp</span> <i className='fab fa-whatsapp'></i></a>
    </div>
  )
}

export default Whatsapp
