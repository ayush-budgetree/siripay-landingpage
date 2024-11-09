import React from 'react';
import appImage from '../assets/appImage.png'; 

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={appImage} alt="App" className="w-auto h-auto" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-2xl font-bold text-blue-400">Venmo Payment</h1>
        <h1 className="text-4xl md:text-7xl font-bold text-gray-800">Fast, Safe and Secure Payments</h1>
        <p className="text-lg text-gray-600">Pay. Get paid. Shop. Share. Join more than 60 million people who use the Venmo app.</p>
        <button className="bg-blue-500 text-white px-12 py-7 rounded-full mt-4">Get the App</button>
        <p className="text-sm text-gray-500 mt-2">Available for: <a href="#" className="text-blue-400">iOS</a> & <a href="#" className="text-blue-400">Android</a></p>
      </div>
    </section>
  );
}

export default HeroSection;
