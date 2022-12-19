import React from 'react';

function FormCreateThread() {
  return (
    <div className="flex flex-col border-2 rounded-2xl m-3 p-3">
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
  );
}

export default FormCreateThread;
