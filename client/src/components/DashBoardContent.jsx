import React, { useEffect, useState } from 'react';
import aws from '../assets/aws.png'
import resync from '../assets/resync.png'
import gcp from '../assets/gcp.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import bitbucket from '../assets/bitbucket.png'
import mongo from '../assets/mongo.png'
import redis from '../assets/redis.png'
import sql from '../assets/sql.png'



const DashBoardContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const user_data = localStorage.getItem('user')
  //console.log(user)
  const user = JSON.parse(user_data)
  console.log(user)

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [progress, setProgress] = useState(0)
  const circumference = 408.2

  const strokeDashoffset = circumference - ((circumference * progress) / 100)

  const name = user.firstName
  const firstName = name.substring(0, name.indexOf(' '))

  const [firstStepSelection, setFirstStepSelection] = useState({
    name: 'AWS',
    bgCol: '#FFF5E5',
    status: 'Pending'
  })

  const [secondStepSelection, setSecondStepSelection] = useState({
    name: 'Github',
    bgCol: '#E9E9E9',
    status: 'Pending'
  })

  const [thirdStepSelection, setThirdStepSelection] = useState({
    name: 'MongoDB',
    bgCol: '#EDF5ED',
    status: 'Pending'
  })

  const firsthandleClick = (name, bgCol, status) => {
    setFirstStepSelection({ name: name, bgCol: bgCol, status: status })
    setProgress(40)
  }

  const secondhandleClick = (name, bgCol, status) => {
    setSecondStepSelection({ name: name, bgCol: bgCol, status: status })
    setProgress(80)
  }

  const thirdhandleClick = (name, bgCol, status) => {
    setThirdStepSelection({ name: name, bgCol: bgCol, status: status })
    setProgress(100)
  }

  return (
    <div className={`flex flex-col`}>
      <header className="flex mx-auto bg-gradient-to-b w-[80vw] rounded-2xl from-white to-blue-100 items-center justify-evenly gap-[45vw] p-4">
        <div>
          <p className="text-5xl text-center pt-3 font-bold">Hi {firstName}!</p>
          <br />
          <p className='text-[13px]'>Welcome to the Xercodee ecosystem 😎</p>
        </div>
        <div className="flex items-center">
          <label
            htmlFor="toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="mr-3 text-black font-medium">
              Test Mode
            </div>
            <div className="relative">
              <input
                id="toggle"
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div className="w-10 h-4 bg-blue-100 rounded-full shadow-inner"></div>
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow ${isChecked ? 'translate-x-full' : ''
                  } -top-1 transition`}
              ></div>
            </div>
            <div className="ml-3 text-black font-medium">
              Production Mode
            </div>
          </label>
        </div>
      </header>

      {/* Content section with rows and cards */}
      <div className='flex'>
        <div id="section-1" className="mt-8 p-4 flex flex-col w-[60vw] gap-4">
          {/* Blue ring with inner circle above and to the left of each row */}
          <div className="flex-col w-[75%] relative">
            <div className="flex items-center gap-x-6 mb-4">
              <div className="bg-blue-500 z-10 w-8 h-8 rounded-full relative">
                {/* Inner white circle */}
                <div className="bg-white w-4 h-4 rounded-full absolute top-2 left-2"></div>
              </div>
              <p>
                <p className='mr-14'>Step 1</p>
                <p className='ml-6'>Connect to cloud</p>
              </p>
            </div>
            <div className='flex gap-x-5 ml-20'>
              <div onClick={() => firsthandleClick('AWS', '#FFF5E5', 'Complete')} className="flex-auto h-32 shadow-2xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#FFF5E5] border-2 border-[#FFDFA2] w-16 rounded-md">
                  <img src={aws} alt="" className='mt-3' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-36 font-semibold">AWS</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div onClick={() => firsthandleClick('GCP', '#ECF3FE', 'Complete')} className="flex-auto  shadow-2xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#ECF3FE] border-2 border-[#4192FF66] w-16 rounded-md">
                  <img src={gcp} alt="" className='mt-[-2px]' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-36 font-semibold">GCP</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div className="flex-auto invisible bg-blue-200 p-4 rounded-xl ml-4">
                {/* Content for the third card in the third row */}
                <p className="text-xl font-semibold">Card 8</p>
                <p>Placeholder content</p>
              </div>
            </div>
            {/* Vertical line */}
            <div className="bg-white w-2 h-48 absolute top-8 left-3 shadow-md border-2"></div>
          </div>

          {/* Second row with 3 cards */}
          <div className="flex-col w-[90%]  relative">
            <div className="flex items-center gap-x-6 mb-4">
              <div className="bg-blue-500 z-10 w-8 h-8 rounded-full relative">
                {/* Inner white circle */}
                <div className="bg-white w-4 h-4 rounded-full absolute top-2 left-2"></div>
              </div>
              <p>
                <p className='mr-[6.5rem]'>Step 2</p>
                <p className='ml-6'>Connect to Source Code</p>
              </p>
            </div>
            <div className='flex overflow-x-auto px-1 py-1 gap-x-5 ml-20 w-full'>
              <div onClick={() => secondhandleClick('Github', '#E9E9E9', 'Complete')} className="flex-auto shadow-2xl h-32 bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#E9E9E9] border-2 border-[#C0C0C0] w-16 rounded-md">
                  <img src={github} alt="" className='mb-2' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-32 font-semibold">Github</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div onClick={() => secondhandleClick('Gitlab', '#FCECEA', 'Complete')} className="flex-auto shadow-2xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#FCECEA] border-2 border-[#F7755687] w-16 rounded-md">
                  <img src={gitlab} alt="" className='mt-[-2px]' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-32 font-semibold">Gitlab</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div onClick={() => secondhandleClick('BitBucket', '#E0ECFF', 'Complete')} className="flex-auto shadow-2xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#E0ECFF] border-2 border-[#4192FF66] w-16 rounded-md">
                  <img src={bitbucket} alt="" className='mt-[-2px]' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-28 font-semibold">Bitbucket</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
            </div>
            {/* Vertical line */}
            <div className="bg-white w-2 h-48 absolute top-8 left-3 shadow-md border-2"></div>
          </div>


          {/* Third row with 3 cards */}
          <div className="flex-col w-[94%] relative">
            <div className="flex items-center gap-x-6 mb-4">
              <div className="bg-blue-500 z-10 w-8 h-8 rounded-full relative">
                {/* Inner white circle */}
                <div className="bg-white w-4 h-4 rounded-full absolute top-2 left-2"></div>
              </div>
              <p>
                <p className='mr-24'>Step 3</p>
                <p className='ml-6'>Connect to DataSource</p>
              </p>
            </div>
            <div className='flex overflow-x-auto p-1 rounded-lg max-w-full gap-x-5 ml-20  w-full'>
              <div onClick={() => thirdhandleClick('MongoDB', '#EDF5ED', 'Complete')} className="flex-auto over shadow-xl h-32 bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#EDF5ED] border-2 border-[#34A853] w-16 rounded-md">
                  <img src={mongo} alt="" className='mb-2' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-32 font-semibold">MongoDB</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div onClick={() => thirdhandleClick('RedisDB', '#FBEAE9', 'Complete')} className="flex-auto shadow-xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#FBEAE9] border-2 border-[#F7755687] w-16 rounded-md">
                  <img src={redis} alt="" className='mt-[-2px]' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-32 font-semibold">RedisDB</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
              <div onClick={() => thirdhandleClick('Postgresql', '#EBF0F4', 'Complete')} className="flex-auto shadow-2xl bg-white p-4 rounded-xl relative">

                <div className="absolute scale-125 ml-16  top-0 right-0 mr-4 mt-7 h-16 p-2 bg-[#EBF0F4] border-2 border-[#64BAFF] w-16 rounded-md">
                  <img src={sql} alt="" className='mt-[-2px]' />
                </div>

                {/* Text "AWS" on the right side */}
                <p className="text-xl mt-5 mr-28 font-semibold">Postgresql</p>

                {/* Three dots at the bottom left */}
                <div className="absolute bottom-0 left-0 ml-4 mb-4 flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <img src={resync} className="w-6 h-6 rounded-full" />
                </div>
              </div>
            </div>
            {/* Vertical line */}
            <div className="bg-white w-2 h-40 absolute top-8 left-3 shadow-md border-2"></div>
          </div>
        </div>


        <div id='section' className="mt-8 p-4 scale-95 w-full sticky top-0 right-0 flex flex-col">
          <div className="bg-white sticky  right-0 top-0 h-[98vh] border-2 shadow-md p-4 rounded-xl">
            <p className="text-2xl font-semibold  ">Your Progress</p>
            <p className='text-sm font-normal'>towards XeroCodee</p>
            <div className="text-center ml-5 mt-4">
              <svg
                width="250"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="145"
                  cy="90"
                  r="65"
                  stroke="#0D64DE"
                  strokeWidth="30"
                  fill="transparent"
                />
                <circle
                  cx="145"
                  cy="90"
                  r="65"
                  stroke="#C7CEFF"
                  strokeWidth="30"
                  fill="transparent"
                  strokeDasharray={`${circumference}`}
                  strokeDashoffset={`${strokeDashoffset}`}
                  strokeLinecap="line"
                />
                <text
                  x="145"
                  y="90"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill="#000000"
                >
                  {progress}%
                </text>
              </svg>
              <p className=''><button className='font-light border-2 p-2 rounded-full'>View Details</button></p>
            </div>
            <div className='flex-col overflow-y-auto'>
              <p className='font-light text-left mb-4'>Step 1</p>
              <div className={`bg-[${firstStepSelection.bgCol}] rounded-xl w-full p-2`}>
                <div className='flex justify-evenly items-center'>
                  <div className='mr-10'>
                    <p className='text-left'>
                      {firstStepSelection.name}
                    </p>
                    <p className='text-sm text-left'>Status: {firstStepSelection.status}</p>
                  </div>
                  {firstStepSelection.name == 'AWS' ? (<img src={aws} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />) : (<img src={gcp} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />)}
                  <div className='flex-col '>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className='font-light text-left mt-4 mb-1'>Step 2</p>
              <div className={`bg-[${secondStepSelection.bgCol}] rounded-xl w-full p-2`}>
                <div className='flex justify-evenly items-center'>
                  <div className='mr-10'>
                    <p className='text-left'>
                      {secondStepSelection.name}
                    </p>
                    <p className='text-sm text-left'>Status: Complete</p>
                  </div>
                  {secondStepSelection.name == 'Github' ? (<img src={github} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />) : (secondStepSelection.name == 'Gitlab' ? (<img src={gitlab} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />) : (<img src={bitbucket} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />))}
                  <div className='flex-col '>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className='font-light text-left mt-4 mb-1'>Step 3</p>
              <div className={`bg-[${thirdStepSelection.bgCol}] rounded-xl w-full p-2`}>
                <div className='flex justify-evenly items-center'>
                  <div className='mr-10'>
                    <p className='text-left'>
                      {thirdStepSelection.name}
                    </p>
                    <p className='text-sm text-left'>Status: {thirdStepSelection.status}</p>
                  </div>
                  {thirdStepSelection.name == 'MongoDB' ? (<img src={mongo} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />) : (thirdStepSelection.name == 'RedisDB' ? (<img src={redis} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />) : (<img src={sql} alt="" className='w-16 h-16 bg-white rounded-lg p-3' />))}
                  <div className='flex-col '>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                    <div className="w-2 my-1 h-2 bg-[#2423313B] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;