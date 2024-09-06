import React from 'react';

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-8 bg-white shadow-md h-auto md:h-20">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <img src="/images/planet.png" alt="logo" className="w-10 md:w-12 h-10 md:h-12" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          Space Travelers' Hub
        </h1>
      </div>

      <ul className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 text-blue-500">
        <li className={`relative ${currentPath === '/rockets' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/rockets">Rockets</a>
          {currentPath === '/rockets' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
        <li className={`relative ${currentPath === '/missions' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/missions">Missions</a>
          {currentPath === '/missions' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
        <li className={`relative ${currentPath === '/profile' ? 'text-black font-bold' : 'hover:text-blue-700'} transition-colors`}>
          <a href="/profile">My Profile</a>
          {currentPath === '/profile' && (
            <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-3/4 w-1 bg-black"></span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
