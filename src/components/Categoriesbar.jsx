import React from 'react';

function Categoriesbar() {
  return (
    <aside className="flex flex-col bg-white w-1/4">
      <div className="bg-slate-100 flex flex-col rounded-2xl m-3">
        <h1 className="font-black text-lg p-3">Kategori Popular</h1>
        <div className="flex flex-col p-3 hover:bg-slate-300 cursor-pointer">
          <h1 className="text-xl text-black font-bold">#React</h1>
        </div>
      </div>
    </aside>
  );
}

export default Categoriesbar;
