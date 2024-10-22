import React from 'react';
import companyLogo from './assets/logo.png';
const OurTeam = () => {
  const teamMembers = [
    { name: 'Prachi Mohite', position: 'Founder & CEO', bio: 'She is the visionary behind our company with over 20 years of experience.' },
    { name: 'Soham Joshi', position: 'CTO', bio: 'Soham leads the technology team and is an expert in development.' },
    { name: 'Himoneesh Sharma', position: 'COO', bio: 'Himoneesh oversees daily operations and ensures smooth functioning across departments.' },
    { name: 'Sruja Pisal', position: 'CMO', bio: 'Sruja manages the marketing department and all the activities related to the promotion of the company.' },
    { name: 'Pranjali Pawar', bio: 'An essential part of our operations team.' },
    { name: 'M Aryan', bio: 'Expert in handling project management and coordination.' },
    { name: 'Shravani Patil', bio: 'Leads customer service and support team with excellence.' },
    { name: 'Anisha Jalanpure', bio: 'Handles all financial operations and ensures fiscal responsibility.' },
    { name: 'Sarthak Parouha', bio: 'Our software development lead with expertise in modern technologies.' }
  ];

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <p className="text-lg text-gray-800 mb-8">
        Our experienced and talented team is dedicated to providing top-notch solutions to help your business thrive.
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 bg-gray-300 rounded-full">
              <img
                src={companyLogo}
                className="h-24 mb-4 rounded-full shadow-lg border-4 border-gray-300"
                alt="Company Logo"
              />
            </div> {/* Placeholder for profile image */}
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-md text-gray-600 mb-2">{member.position}</p>
            <p className="text-sm text-gray-500 text-center">{member.bio}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurTeam;