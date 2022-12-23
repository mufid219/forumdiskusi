import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function FormCreateThread({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const navigate = useNavigate();

  const addthread = () => {
    if (title.trim() && body.trim() && category.trim()) {
      addThread({ title, category, body });
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col border-2 rounded-2xl m-3 p-3">
      <form action="" className="mt-6">
        <div className="mb-2">
          <label htmlFor="judul" className="text-sm font-semibold text-gray-800 pl-2">Judul
            <input id="judul" type="text" value={title} onChange={onTitleChange} className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="kategori" className="text-sm font-semibold text-gray-800 pl-2">Kategori
            <input id="kategori" type="text" value={category} onChange={onCategoryChange} className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="deskripsi" className="text-sm font-semibold text-gray-800 pl-2">Deskripsi
            <textarea id="deskripsi" value={body} onChange={onBodyChange} className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
          </label>
        </div>
        <div className="mt-6">
          <button type="button" onClick={addthread} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Buat</button>
        </div>
      </form>
    </div>
  );
}
FormCreateThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default FormCreateThread;
