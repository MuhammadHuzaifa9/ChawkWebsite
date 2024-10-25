import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';


const Categories = () => {
    const[data,setData]=useState([]);
    
    const getCategories=async()=>{
        try{
            const data= await fetch('https://api.escuelajs.co/api/v1/categories')
            const res= await data?.json();
            
            setData(res)
            
            

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getCategories()
    },[])

    const navigate=useNavigate();

  return (
    <div className='open-sans text-base w-11/12  mx-auto my-16 text-black'>
        <h1 className='text-4xl mb-16 '>Featured Categories</h1>
    <div className='flex items-center justify-center gap-10 flex-wrap  mx-auto '>

      {data.slice(0,5).map((item)=>{
        return(
            
            <div key={item.id} onClick={()=>navigate(`/Home/${item.name}`)} className='w-44  flex flex-col items-center rounded-lg'>
                <img src={item.image} alt="" className='rounded-lg' />
                <h1 className='my-4 font-semibold text-xl '>{item.name}</h1>

            </div>
            

      )})}
    </div>
    </div>
  )
  
}

export default Categories
