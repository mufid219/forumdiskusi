import React from 'react';
import Categoriesbar from '../components/Categoriesbar';
import Sidebar from '../components/Sidebar';

function CreateThreadPage() {
  return (
    <div className="h-screen bg-white flex flex-row">
      <Sidebar />
      <div className="flex-1 bg-white border-x-2">
        <div className="flex flex-col p-3 border-b-2">
          <h1 className="text-2xl font-semibold">Buat Diskusi Baru</h1>
        </div>
        <div className="flex flex-col">
          <form action="" className="mt-6">
            <div className="mb-2">
              <label htmlFor="judul" className="text-sm font-semibold text-gray-800 pl-2">Judul
                <input id="judul" type="text" className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
              </label>
            </div>
            <div className="mb-2">
              <label htmlFor="kategori" className="text-sm font-semibold text-gray-800 pl-2">Kategori
                <input id="kategori" type="text" className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
              </label>
            </div>
            <div className="mb-2">
              <label htmlFor="deskripsi" className="text-sm font-semibold text-gray-800 pl-2">Deskripsi
                <textarea id="deskripsi" className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
              </label>
            </div>
            <div className="mt-6">
              <button type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Buat</button>
            </div>
          </form>
        </div>
      </div>
      <Categoriesbar />
    </div>
  );
}

export default CreateThreadPage;
