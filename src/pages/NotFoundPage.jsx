import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-blue-700 px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>
        <button type="button" className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          <Link to="/">Kembali ke Home</Link>
        </button>
      </main>
    </div>
  );
}

export default NotFoundPage;
