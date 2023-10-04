import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import one from '../assets/dash_board/1.png';
import two from '../assets/dash_board/2.png';
import three from '../assets/dash_board/3.png';
import four from '../assets/dash_board/4.png';
import five from '../assets/dash_board/5.png';
import six from '../assets/dash_board/6.png';
import seven from '../assets/dash_board/7.png';
import eight from '../assets/dash_board/8.png';
import nine from '../assets/dash_board/9.png';
import ten from '../assets/dash_board/10.png';
import eleven from '../assets/dash_board/11.png';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth < 768) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        // Always keep the sidebar open on medium or large screens
        setIsSidebarOpen(true);
      }
    }

    // Check screen size when the component mounts and when it updates
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarOpen]);

  // Define your list of items with names and images
  const sidebarItems = [
    { id: 1, name: 'XeroCodee', image: one },
    { id: 2, name: 'Build Center', image: two },
    { id: 3, name: 'Service Board', image: three },
    { id: 4, name: 'Clusters', image: four },
    { id: 5, name: 'Databases', image: five },
    { id: 6, name: 'Environment', image: six },
    { id: 7, name: 'Workflow', image: seven },
    { id: 8, name: 'Monitoring', image: eight },
    { id: 9, name: 'Security', image: nine },
    { id: 10, name: 'Web Hooks', image: ten },
    { id: 11, name: 'Log Error', image: eleven },

    // Add more items as needed
  ];

  // Function to handle item click
  const handleItemClick = (itemId) => {
    if (selectedItem === itemId) {
      setSelectedItem(null); // Remove the selection if the same item is clicked again
    } else {
      setSelectedItem(itemId); // Set the clicked item as selected
    }
  };

  return (
    <div>
      <aside
        ref={sidebarRef}
        className={`sidebar w-52 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transform bg-blue-200 h-full p-4 transition-transform duration-150 ease-in `}
      >
        <div className="my-4 w-full text-center">
          <span className="text-base font-bold tracking-widest">
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="my-4">
          {/* List of sidebar items */}
          <ul className='flex flex-col gap-y-3'>
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className={`mb-2 flex text-sm py-2 px-6 gap-x-10 items-center relative ${
                  selectedItem === item.id ? 'bg-white font-bold text-blue-700 py-2 px-6 rounded-full' : ''
                }`}
                onClick={() => handleItemClick(item.id)} // Call the function on item click
              >
                <div className="flex items-center justify-stretch gap-4">
                  <img src={item.image} alt={`Item ${item.id}`} />
                  <a href="#">{item.name}</a>
                </div>
                {(selectedItem === item.id && isSidebarOpen) && (
                  <div className="absolute left-[10rem] top-5 -mt-2 w-14 h-4 bg-white rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-0 md:hidden z-10 p-2 rounded-md"
          onClick={toggleSidebar}
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
      )}
    </div>
  );
};

export default Sidebar;
