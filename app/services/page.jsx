import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Web Development</h2>
          <p className="text-lg">We specialize in building responsive and user-friendly websites using the latest technologies.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Graphic Design</h2>
          <p className="text-lg">Our talented designers can create stunning visuals for your brand, including logos, banners, and more.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
          <p className="text-lg">We offer digital marketing services to help you reach your target audience and grow your business online.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
