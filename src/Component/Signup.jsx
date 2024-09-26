import React from 'react';

const Signup = () => {
  return (
    <div className="h-screen bg-green-400 flex justify-center items-center">
      {/* Signup Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Create Your Account</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Signup Button */}
        <button className="bg-green-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-green-400 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;