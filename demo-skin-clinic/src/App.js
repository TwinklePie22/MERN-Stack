import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';

const SkinClinicHomepage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Radiant Skin Clinic</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome to Radiant Skin</h2>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Your destination for healthy, glowing skin</p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a href="https://stackoverflow.com/questions/18486243/how-do-i-build-openssl-statically-linked-against-windows-runtime?rq=1" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services section */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h3>
            <div className="mt-6">
              {services.map((service) => (
                <Disclosure as="div" key={service.id} className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span>{service.name}</span>
                        <span className={open ? 'transform rotate-180' : ''}>▼</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {service.description}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkinClinicHomepage;