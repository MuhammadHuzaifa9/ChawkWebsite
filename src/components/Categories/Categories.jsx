import React, { useEffect, useState } from 'react'


const Categories = () => {
    const[data,setData]=useState([]);
    const[name,setName]=useState();
    const getCategories=async()=>{
        try{
            const data= await fetch('https://api.escuelajs.co/api/v1/categories')
            const res= await data?.json();
            console.log(res)
            setData(res)
            const sorted = [...new Set(res.map((item)=>item.name))]
            setName(sorted)
            

        }
        catch(error){
            console.log(error);
        }
    }
useEffect(()=>{
    getCategories()
},[])

  return (
    <>
        <h1 className='text-4xl m-24 '>Featured Categories</h1>
    <div className='flex items-center justify-center gap-4 flex-wrap h-52 overflow-hidden m-4'>

      {data.map((item)=>{
        return(
            <>
            <div key={item.id} className='w-44  flex flex-col items-center'>
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>

            </div>
            </>

      )})}
    </div>
    </>
  )
  
}

export default Categories
