import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Hosting = () => {

  const user_data = localStorage.getItem('user')
  //console.log(user)
  const user = JSON.parse(user_data)
  console.log(user)
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState({
    developer: false,
    organisation: false,
    company: false,
  });

  const handleButtonClick = (buttonName) => {
    // Set the clicked button to blue, and others to their default state
    setButtonClicked({
      developer: buttonName === 'developer',
      organisation: buttonName === 'organisation',
      company: buttonName === 'company',
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission here (e.g., send the value to a server)
    // For now, let's just log the input value to the console
    console.log('Submitted Value:', inputValue);
    setInputValue(''); // Clear the input field
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={logo}
          alt="Logo"
          className="mb-4 lg:w-1/12 w-1/3"
        />
        <h2 className="text-3xl text-center lg:text-2xl font-semibold mb-10">Welcome {user.firstName} !</h2>
        <h2 className="lg:text-xs md:text-xl text-base text-center mb-8">
          <span className='border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span>
          Choose from following deployment option
          <span className='w-full border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span>
        </h2>
        {/* Buttons */}
        <div className="flex gap-x-24 flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 justify-stretch mb-[30vh]">
          <button
            className={`w-full md:text-4xl lg:text-2xl lg:w-auto px-10 py-2 border-2 ${buttonClicked.developer ? 'bg-blue-500 text-white' : ''
              }`}
            onClick={() => handleButtonClick('developer')}
          >
            Self Hosting
          </button>
          <button
            className={`w-full md:text-4xl lg:text-2xl lg:w-auto px-10 py-2 border-2 ${buttonClicked.organisation ? 'bg-blue-500 text-white' : ''
              }`}
            onClick={() => handleButtonClick('organisation')}
          >
            XeroCodee Hosting
          </button>
        </div>
        {/* Input */}
        <button className="px-4  py-2 bg-blue-500 text-white rounded-md"
         onClick={()=>{navigate('/dashboard')}}
        >Submit</button>
      </div>
    </>
  );
}

export default Hosting;