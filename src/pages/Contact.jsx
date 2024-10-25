import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../components/Header/Header';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = data => {
    if (!data.email || !data.message) {
      setErrorMessage('Please fill in all fields.');
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 2000);
      return;
    }

    console.log(data);
    setErrorMessage('Email sent successfully!');
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 2000);
  };

  return (
    <>
      <Header />
      <h1 className='text-2xl font-bold inline ml-[10%] md:ml-[39%] my-8 open-sans '>Contact Us Through Email</h1>
      <div className='w-96 h-96 bg-gray-500 rounded-md mx-auto my-10 border-2 border-black'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center m-2'>
          <input 
            placeholder='Enter Your Email' 
            className='w-80 p-2 h-12 m-4 rounded-lg outline-none border border-solid border-black'  
            {...register("email")} 
          />
          <textarea 
            placeholder='Enter your message' 
            className='w-80 h-24 p-2 m-4 rounded-lg outline-none border border-solid border-black'  
            {...register("message")} 
          />
          <input className='w-60  py-2 border-2 rounded-lg text-2xl m-6 bg-black text-white' type="submit" />
        </form>
      </div>
      {popupVisible && (
        <div className='fixed top-4 right-4 p-4 bg-green-500 text-white rounded-md shadow-lg z-50'>
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default Contact;
