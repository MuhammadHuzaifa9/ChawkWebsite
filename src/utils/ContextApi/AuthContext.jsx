import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export  const ProductContext=createContext()

export const AuthContext = ({children}) => {
  const [products,setProducts]=useState([]);

  const fetchData=async()=>{

    try{
      const {data}= await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(data);
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default AuthContext
