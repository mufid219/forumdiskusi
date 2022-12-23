import React from 'react';
import ThreadsList from './ThreadsList';

function Main() {
  return (
    <main className="flex-1 bg-white border-x-2 ">
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold ">Diskusi Tersedia</h1>
      </div>
      <ThreadsList />
    </main>
  );
}

export default Main;
