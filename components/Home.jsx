"use client"
import React, { useState } from 'react';
import axios from 'axios';
import CityModal from '../components/CityModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1f9f6211347d6ce19f62e481dac420a&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleCitySubmit = (city) => {
    fetchWeatherData(city);
    closeModal();
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-auto">
      <p className='text-lg mb-1'>Lets check your city weather details here.</p>
      <p className='text-lg mb-5'>Kindly provide your city details</p>
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded mb-4"
          onClick={openModal}
        >
          Enter City
        </button>
        <CityModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onSubmit={handleCitySubmit}
        />
        {weatherData && (
          <div>
            <h2 className="text-xl font-bold mb-2">Weather Information</h2>
            <p>
              <span className="font-bold">City:</span> {weatherData.name}
            </p>
            <p>
              <span className="font-bold">Temperature:</span>{' '}
              {weatherData.main.temp}°C
            </p>
            <p>
              <span className="font-bold">Wind Speed:</span>{' '}
              {weatherData.wind.speed}km/h
            </p>
            <p>
              <span className="font-bold">Description:</span>{' '}
              {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
