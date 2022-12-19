import React from 'react';
import PropTypes from 'prop-types';
import ForumList from '../components/ForumList';
// import Categoriesbar from '../components/Categoriesbar';
// import Main from '../components/Main';
// import Sidebar from '../components/Sidebar';

function HomePage({ title }) {
  return (
    <>
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <ForumList />
    </>
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

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
