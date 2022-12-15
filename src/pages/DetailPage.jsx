import React from 'react';
import Categoriesbar from '../components/Categoriesbar';
import Detail from '../components/Detail';
import Sidebar from '../components/Sidebar';

function DetailPage() {
  return (
    <div className="h-screen bg-white flex flex-row">
      <Sidebar />
      <Detail />
      <Categoriesbar />
    </div>
  );
}

export default DetailPage;
