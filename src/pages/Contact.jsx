import React from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (

    <div className='w-96 h-96 bg-blue-300 rounded-lg mx-auto my-10  '>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  items-center'>
      
      <input placeholder='Enter Email' className='w-80 h-12 m-4 rounded-lg outline-none border-2 border-solid border-black'  {...register("email" , {required:true})} />
      {errors.email && <span>This field is required</span>}
      
     
      <input placeholder='Enter your password' className='w-80 h-12 rounded-lg outline-none border-2 m-6 border-solid border-black' {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      
      <input className='w-60 h-12  border-2 rounded-lg text-2xl m-6 bg-blue-400 text-white' type="submit" />
    </form>
    </div>
  )
}

export default Contact
