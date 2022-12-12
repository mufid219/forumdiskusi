import React from 'react';
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
