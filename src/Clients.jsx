import React from 'react';

// Example client data
const clients = [
  {logo: '/src/assets/client.jpg' }, // Update with the actual logo path
  // Add more clients as needed
];

function Clients() {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
      <p className="text-lg text-gray-800 mb-8">
        At SHAP Solutions, we take pride in our diverse client base. Our clients span various industries, including technology, finance, healthcare, and more.
      </p>

      {/* Adjusted container */}
      <div className="flex flex-col items-center">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg h-full"
          >
            <img 
              src={client.logo} 
              alt={`${client.name} Logo`} 
              className="w-24 h-24 mb-4 object-contain" 
            />
            <h3 className="text-xl font-semibold">{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
