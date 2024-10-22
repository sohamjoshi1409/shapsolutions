import React from 'react';

// Example tender data
const tenders = [
  { logo: '/src/assets/tender.png'}, // Update with the actual logo path and name
  // Add more tenders as needed
];

function Tenders() {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Our Tenders</h2>
      <p className="text-lg text-gray-800 mb-8">
        At SHAP Solutions, we are committed to delivering high-quality services through various tenders across multiple sectors.
      </p>

      {/* Adjusted container */}
      <div className="flex flex-col items-center">
        {tenders.map((tender, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg h-full"
          >
            <img 
              src={tender.logo} 
              alt={`${tender.name} Logo`} 
              className="w-24 h-24 mb-4 object-contain" 
            />
            <h3 className="text-xl font-semibold">{tender.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tenders;
