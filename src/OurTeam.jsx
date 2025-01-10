import React from 'react';
import companyLogo from './assets/logo.png';
import soham from './assets/soham.jpg';
import prachi from './assets/prachi.png';
import himoneesh from './assets/himoneesh.jpg';
import sruja from './assets/sruja.jpg';
import pranjali from './assets/pranjali.jpg';
import aryan from './assets/aryan.jpg';
import shravani from './assets/shravani.jpg';
import anisha from './assets/anisha.jpg';
import sarthak from './assets/sarthak.jpg';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Prachi Mohite', position: 'Founder & CEO', bio: 'A first-time founder with a strong entrepreneurial spirit, eager to disrupt industries and build a thriving business from the ground up.', img: prachi},
    { name: 'Soham Joshi', position: 'CTO', bio: 'Soham leads the technology team and is an expert in development.', img: soham},
    { name: 'Himoneesh Sharma', position: 'COO', bio: 'Himoneesh oversees daily operations and ensures smooth functioning across departments.', img: himoneesh},
    { name: 'Sruja Pisal', position: 'CMO', bio: 'Sruja manages the marketing department and all the activities related to the promotion of the company.', img: sruja},
    { name: 'Pranjali Pawar', bio: 'An essential part of our operations team.', img: pranjali},
    { name: 'M Aryan', bio: 'Expert in handling project management and coordination.', img: aryan},
    { name: 'Shravani Patil', bio: 'A proactive team member dedicated to driving collaboration and contributing innovative ideas for collective success.', img: shravani},
    { name: 'Anisha Jalanpure', bio: 'A highly motivated team member focused on contributing to impactful solutions through teamwork and strategic thinking.', img: anisha},
    { name: 'Sarthak Parouha', bio: 'A resourceful team member with a passion for innovation, always ready to support and elevate team projects with fresh perspectives', img: sarthak}
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
            <div className="w-24 h-32 mb-4 bg-gray-300 rounded-full">
              <img
                src={member.img}
                className="h-32 mb-4 rounded-full shadow-lg border-4 border-gray-300"
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