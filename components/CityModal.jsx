import React, { useState } from 'react';

const CityModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
    setCity('');
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 transition-shadow" onClick={onRequestClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full">
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-xl font-bold mb-4">Enter Your City</h2>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onRequestClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityModal;
