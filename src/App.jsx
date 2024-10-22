import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import companyLogo from './assets/logo.png'; // Import the company logo
import Clients from './Clients';
import Tenders from './Tenders';
import AboutUs from './AboutUs';
import Contact from './Contact'; 
import OurTeam from './OurTeam'; // Import the OurTeam component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-start bg-lavender p-6 w-full max-w-7xl mx-auto">
        {/* Company logo */}
        <img 
          src={companyLogo} 
          className="w-32 h-32 mb-4 rounded-full shadow-lg border-4 border-gray-300" 
          alt="Company Logo" 
        />

        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">Welcome to SHAP Solutions</h1>

        {/* Navigation Links */}
        <nav className="mb-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            Home
          </NavLink>
          <NavLink 
            to="/clients" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            Our Clients
          </NavLink>
          <NavLink 
            to="/tenders" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            Our Tenders
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            Contact Us
          </NavLink>
          <NavLink 
            to="/our-team" 
            className={({ isActive }) => `text-gray-800 mx-4 hover:underline ${isActive ? 'font-bold' : ''}`}>
            Our Team
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} /> {/* New Our Team Route */}
        </Routes>

        <p className="text-gray-600 mt-4 text-center" pd-2>
          &copy; {new Date().getFullYear()} SHAP Solutions. All rights reserved.
        </p>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div className="text-center mt-4">
      <p className="text-lg text-gray-800 mb-8 max-w-3xl px-4">
        At SHAP Solutions, we provide expert consulting services to help your business thrive.
        Our team specializes in innovative strategies, operational efficiency, and tailored solutions
        to meet your unique needs. Partner with us to elevate your business to the next level!
      </p>
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-md text-gray-600 mb-4">
          Get in touch with us to learn more about how we can assist you!
        </p>
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
