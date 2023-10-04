import React from 'react'
import search from '../assets/search.png';
import upgrade_plan from '../assets/upgrade_plan.png'
import notification from '../assets/notification.png'
import mail from '../assets/mail.png'
import settings from '../assets/settings.png'
import arrow_down from '../assets/arrow_down.png'
import account from '../assets/account.png'
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="hidden lg:flex items-center justify-between bg-blue-200 p-4">
                <div className="flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 text-black rounded-full px-10 py-2 focus:outline-none"
                        />
                        <button className="absolute top-0 left-56">
                            {/* <FontAwesomeIcon icon={faSearch} /> */}
                            <img src={search} alt="" className='bg-blue-800 w-10 p-1 ml-7 h-10 rounded-full' />
                        </button>
                    </div>
                </div>
                {/* Icons */}
                <div className="flex justify-evenly gap-2 items-center">
                    {/* Add your icons here */}
                    <span className="flex shadow-md justify-center bg-yellow-400 rounded-full py-2 gap-x-2 items-center text-base">
                        <img src={upgrade_plan} className=' w-1/5 rounded-full bg-white p-1' alt="" />
                        <p>Upgrade Plan</p>
                    </span>
                    <div className='flex items-center justify-evenly gap-2 pl-2'>
                        <span> <img src={notification} className='w-9 shadow-md rounded-md bg-white p-1' alt="" /></span>
                        <span> <img src={mail} className='w-9 shadow-md rounded-md bg-white p-1' alt="" /></span>
                        <span> <img src={settings} className='w-9 shadow-md rounded-md bg-white p-1' alt="" /></span>
                    </div>
                    <div className='flex justify-between pl-2'>
                        <span className='flex justify-center items-center'><p className='font-semibold'>XeroCodee</p><img className='w-1/6' src={arrow_down} alt="" /></span>
                        <span> <img src={account} className='w-1/2 rounded-md bg-white p-1' alt="" /></span>
                    </div>
                </div>
            </div>
            <nav className="bg-blue-200 p-4 lg:hidden">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black font-bold text-xl">
                        <input type="text" placeholder='Search' className='p-2 px-10 text-sm w-48 rounded-full'/>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleDropdown}
                            className="block text-black focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden text-black items-center md:flex ml-1 space-x-4">
                        <img src={upgrade_plan} className="text-black rounded-full w-9 p-2 bg-yellow-400"/>
                        <img src={notification} className="text-black rounded-md w-9 p-2 bg-white"/>
                        <img src={mail} className="text-black rounded-md w-9 p-2 bg-white"/>
                        <img src={settings} className="text-black rounded-md w-9 p-2 bg-white"/>
                         <span className='flex justify-center items-center'><p href="#" className="text-black text-sm">XeroCodee</p> <img src={arrow_down} className='w-4' /></span>
                        <img src={account} className="text-black rounded-md w-9 p-2 bg-white"/>
                    </div>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="bg-blue-200 px-4 pt-2 pb-3 space-y-2">
                            <div href="#" className="text-black flex justify-between items-center bg-yellow-400 rounded-md p-2 "><p className='font-semibold'>Uprage Plan</p> <img src={upgrade_plan} alt="" className='w-9 rounded-full bg-white p-2'/></div>
                            <div href="#" className="text-black flex justify-between items-center  rounded-md p-2 "><p className='font-semibold'>Notification</p> <img src={notification} alt="" className='w-9 rounded-md bg-white p-2'/></div>
                            <div href="#" className="text-black flex justify-between items-center  rounded-md p-2 "><p className='font-semibold'>Messages</p> <img src={mail} alt="" className='w-9 rounded-md  bg-white p-2'/></div>
                            <div href="#" className="text-black flex justify-between items-center  rounded-md p-2 "><p className='font-semibold'>Settings</p> <img src={settings} alt="" className='w-9 rounded-md bg-white p-2'/></div>
                            <div href="#" className="text-black flex justify-between items-center  rounded-md p-2 "><p className='font-semibold'>XeroCodee</p> <img src={arrow_down} alt="" className='w-10 p-2'/></div>
                            <div href="#" className="text-black flex justify-between items-center  rounded-md p-2 "><p className='font-semibold'>Account</p> <img src={account} alt="" className='w-9 rounded-md bg-white p-2'/></div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar