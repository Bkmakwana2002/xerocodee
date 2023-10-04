import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState({
    developer: false,
    organisation: false,
    company: false,
  });

  const navigate = useNavigate()

  // const user = useAuthStore((state) => state.user);
  // console.log(user)
  const user_data = localStorage.getItem('user')
  //console.log(user)
  const user = JSON.parse(user_data)
  console.log(user)

  const handleButtonClick = (buttonName) => {
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
    console.log('Submitted Value:', inputValue);
    setInputValue('');
    navigate('/hosting')
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={logo}
          alt="Logo"
          className="mb-4 lg:w-1/12 w-1/3"
        />
        <h2 className="text-2xl text-center lg:text-2xl font-semibold mb-10">Welcome {user.firstName} {user.lastName} !</h2>
        <h2 className="lg:text-xs md:text-xl text-base text-center mb-8">
          <span className='border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span>
          Create Your Account
          <span className='w-full border-b-2 '><span className='invisible'>fvdfdwvdvwv</span></span>
        </h2>
        {/* Buttons */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 justify-center mb-[30vh]">
          <button
            className={`w-full md:text-4xl lg:text-2xl lg:w-auto px-10 py-2 border-2 ${buttonClicked.developer ? 'bg-blue-500 text-white' : ''
              }`}
            onClick={() => handleButtonClick('developer')}
          >
            Developer
          </button>
          <button
            className={`w-full md:text-4xl lg:text-2xl lg:w-auto px-10 py-2 border-2 ${buttonClicked.organisation ? 'bg-blue-500 text-white' : ''
              }`}
            onClick={() => handleButtonClick('organisation')}
          >
            Organisation
          </button>
          <button
            className={`w-full md:text-4xl lg:text-2xl lg:w-auto px-10 py-2 border-2 ${buttonClicked.company ? 'bg-blue-500 text-white' : ''
              }`}
            onClick={() => handleButtonClick('company')}
          >
            Company
          </button>
        </div>
        {/* Input */}
        {(buttonClicked.organisation || buttonClicked.company) ? (
          <div className="flex justify-center mt-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border-2 px-4 py-2 rounded-md"
              placeholder={buttonClicked.organisation ? "Enter your Organisation" : "Enter your Comapny"}
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (buttonClicked.developer && <button
          className="px-4  py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>)}
      </div>
    </>
  );
}

export default Questions;