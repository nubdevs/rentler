import React from 'react'
import Logo from "../assets/img/logo-color.png"

const Navbar = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className='md:ml-40 p-2 flex flex-row justify-start items-start'>
                <img className='w-[30px]  rounded-full ' src={Logo} alt="logo"></img>
                <span className='ml-2 text-black font-bold text-2xl'>Rentler
                </span><span className='mr-4 text-violet-600 font-bold text-2xl'>.com</span>
            </div>


            <hr></hr>

        </div>
    )
}

export default Navbar