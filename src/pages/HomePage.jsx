import React from 'react';
import Categoriesbar from '../components/Categoriesbar';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
// import PropTypes from 'prop-types';

function HomePage() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <Main />
      <Categoriesbar />
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
