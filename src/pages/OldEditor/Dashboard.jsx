// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Pages</h1>
      <Link to="/edit/new" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
        Create New Page
      </Link>
      <ul className="mt-8 space-y-4">
        <li>
          <Link to="/edit/about" className="text-blue-600 hover:underline">Edit About Page</Link>
        </li>
        <li>
          <Link to="/edit/contact" className="text-blue-600 hover:underline">Edit Contact Page</Link>
        </li>
        <li>
          <Link to="/preview/about" className="text-blue-600 hover:underline">Preview About Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
