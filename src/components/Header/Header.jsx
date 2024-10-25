import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center w-full sticky top-0 z-50 bg-white shadow-sm p-[25px]'>
            <div className='w-40'>
                <img src="/logo (1).svg" alt="Logo" />
            </div>
            
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    {isOpen ? (
                        <span className='text-2xl'>&#10005;</span> 
                    ) : (
                        <span className='text-2xl'>&#9776;</span> 
                    )}
                </button>
            </div>
            
            <ul className={`flex p-2 rounded-lg gap-10 md:flex md:gap-10 absolute md:static ${isOpen ? 'flex-col bg-white md:bg-transparent' : 'hidden md:flex'} md:flex-row transition-all duration-300`}>
                <li onClick={() => { navigate('/'); setIsOpen(false); }} className='cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:shadow-slate-900 hover:bg-slate-600 hover:text-white hover:p-1 rounded-md'>Home</li>
                <li onClick={() => { navigate('/Products'); setIsOpen(false); }} className='cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:shadow-slate-900 hover:bg-slate-600 hover:text-white hover:p-1 rounded-md'>Product</li>
                <li onClick={() => { navigate('/Search'); setIsOpen(false); }} className='cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:shadow-slate-900 hover:bg-slate-600 hover:text-white hover:p-1 rounded-md'>Search</li>
                <li onClick={() => { navigate('/Contact'); setIsOpen(false); }} className='cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:shadow-slate-900 hover:bg-slate-600 hover:text-white hover:p-1 rounded-md'>Contact</li>
            </ul>
        </div>
    );
};

export default Header;
