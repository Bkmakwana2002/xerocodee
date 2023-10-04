import React from 'react';
import Sidebar from '../components/Sidebar';

import Navbar from '../components/Navbar';
import DashBoardContent from '../components/DashBoardContent';

const Dashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-row bg-blue-200">
        <Sidebar />
        <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          {/* Navbar */}
          {/* Content */}
          <Navbar/>
          <div className="flexh-full w-full items-start justify-center bg-white text-center font-bold rounded-2xl">
            <DashBoardContent/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
