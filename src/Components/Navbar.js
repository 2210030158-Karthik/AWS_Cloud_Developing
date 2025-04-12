import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <div className="space-x-6">
      <Link to="/" className="hover:underline font-semibold">Home</Link>
      <Link to="/dashboard" className="hover:underline font-semibold">Dashboard</Link>
      <Link to="/class" className="hover:underline font-semibold">Class</Link>
      <Link to="/chat" className="hover:underline font-semibold">Chat</Link>
      <Link to="/jitsi">Video Call</Link> |
    </div>
    <div>
      <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold">
        Login
      </Link>
    </div>
  </nav>
);

export default Navbar;
