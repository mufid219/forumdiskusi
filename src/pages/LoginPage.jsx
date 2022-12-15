import React from 'react';
import { Link } from 'react-router-dom';
import Categoriesbar from '../components/Categoriesbar';
import Sidebar from '../components/Sidebar';

function LoginPage() {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar />
      <main className="relative flex-1 flex flex-col justify-center min-h-screen overflow-hidden">
        <section className="w-full p-6 m-auto bg-white rounded-xl shadow-md lg:max-w-xl">
          <h2 className="text-3xl font-semibold text-center">Sign in</h2>
          <form action="" className="mt-6">
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email
                <input id="email" type="email" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </label>
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password
                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </label>
            </div>
            <div className="mt-6">
              <button type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">login</button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">Tidak punya akun ? <Link to="/register" className="font-medium text-blue-600 hover:underline">Daftar disini.</Link></p>
        </section>
      </main>
      <Categoriesbar />
    </div>
  );
}

export default LoginPage;
