import React, { useState } from 'react';
import appartment from '../../public/apartment.jpeg';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {


  const [selectedOptions, setSelectedOptions] = useState({
    location: '',
    BedRooms: '',
    priceRange: '',
  });


  const navigate = useNavigate(); 

  const handleSearch = () => {
    const { location, BedRooms, priceRange } = selectedOptions;
  
    if (location !== '' || BedRooms !== '' || priceRange !== '') {
      navigate('/propertylisting', {
        state: { location, BedRooms, priceRange }
      });
    }
  };


  const handleSelect = (key, value) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="text-2xl font-bold text-green-700">TotalityCorp</div>
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-600">Home</a>
          <Link to='/propertylisting' className="text-gray-600">Property</Link>
          <a href="/contact" className="text-gray-600">Contact Us</a>
        </nav>
        <div>
          <Link to='/login'>
          <button className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded mr-2">Login</button>
          </Link>
          <Link to='/signup'>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
          </Link>
          
        </div>
      </header>

      {/* Main Section */}
      <main className="flex justify-between items-center px-10 py-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Find Your <span className="text-green-500 underline">Perfect Home</span> <br /> With us
          </h1>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            {/* Search Filters */}
            <div className="flex space-x-4">
              <button className="bg-green-100 text-green-600 px-6 py-2 rounded-md">Rental Property</button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <select
                className="border p-3 rounded-md"
                onChange={(e) => handleSelect('location', e.target.value)}
                value={selectedOptions.location}
              >
                <option value="">Location</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Jaipur">Jaipur</option>
                {/* Add more options */}
              </select>

              <select
                className="border p-3 rounded-md"
                onChange={(e) => handleSelect('BedRooms', e.target.value)}
                value={selectedOptions.BedRooms}
              >
                <option value="">BedRooms</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                {/* Add more options */}
              </select>

              <select
                className="border p-3 rounded-md"
                onChange={(e) => handleSelect('priceRange', e.target.value)}
                value={selectedOptions.priceRange}
              >
                <option value="">Price Range</option>
                <option value="10k-20k">10k-20k</option>
                <option value="20k-30k">20k-30k</option>
                <option value="30k-40k">30k-40k</option>
                {/* Add more options */}
              </select>
            </div>

            <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex space-x-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">400+</h2>
              <p className="text-gray-500">Happy customers</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">300K+</h2>
              <p className="text-gray-500">Property Ready</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={appartment}
            alt="Apartment"
            className="rounded-lg shadow-lg w-[28.125rem]"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
