import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 pb-0">
      <div className="text-2xl font-bold">ofsp_ce</div>
      <div className="flex justify-between items-center">
        <div className="space-x-6">
            <button className="text-gray-600">Send&Receive</button>
            <button className="text-gray-600">Pay with Venmo</button>
            <button className="text-gray-600">Venmo for Business</button>
            <button className="text-blue-500 font-medium">Log in</button>
        </div>
        <button className="bg-white text-blue-400 px-6 py-4 mx-6 rounded-full">Get Venmo</button>
      </div>
    </nav>
  );
}

export default Navbar;
