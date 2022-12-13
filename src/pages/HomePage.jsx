import React from 'react';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import Sidebar from '../components/Sidebar';
// import PropTypes from 'prop-types';

function HomePage() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />

      {/* Main Feed */}
      <div className="flex-1 bg-white border-x-2 ">
        {/* Header */}
        <div className="flex flex-row p-3 border-b-2">
          <h1 className="text-2xl font-semibold ">Diskusi Tersedia</h1>
        </div>
        {/* Diskusi Card */}
        <div className="flex flex-col p-3">
          <div className="flex flex-col w-full border-2 rounded-2xl p-3">
            <h1 className=" text-black border-2 w-1/6 rounded-xl pl-3 mb-2">#React</h1>
            <h1 className="text-lg font-bold text-black cursor-pointer">Pengalaman Belajar React di Dicoding</h1>
            <h1 className="text-sm mb-1">Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</h1>
            <div className="flex flex-row justify-between">
              <h1 className="text-sm flex cursor-pointer "><BiLike className="mr-2" /> 3</h1>
              <h1 className="text-sm flex cursor-pointer "><BiDislike className="mr-2" /> 3</h1>
              <h1 className="text-sm flex cursor-pointer"><BiComment className="mr-2" /> 3</h1>
              <h1 className="text-xs">29 hari lalu</h1>
              <h1 className="text-xs">Dibuat oleh Jinbei</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="flex flex-col bg-white w-1/4">
        <div className="bg-slate-100 flex flex-col rounded-2xl m-3">
          <h1 className="font-black text-lg p-3">Kategori Popular</h1>
          <div className="flex flex-col p-3 hover:bg-slate-300 cursor-pointer">
            <h1 className="text-xl text-black font-bold">#React</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// function MenuItem({ icon, title }) {
//   return (
//     <div className="flex flex-col w-1/4 h-full justify-center items-center bg-white">
//     < {icon}/>
//       <h1 className="text-xl flex flex-row ">{title ?? 'Title'}</h1>
//     </div>
//   );
// }

// MenuItem.propTypes = {
//   icon: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default HomePage;
