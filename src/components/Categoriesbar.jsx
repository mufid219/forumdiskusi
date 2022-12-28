import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPupulateUsersAndThreads } from '../states/shared/action';

function Categoriesbar() {
  const {
    threads = [],
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPupulateUsersAndThreads());
  }, [dispatch]);

  return (
    <aside className="flex flex-col bg-white w-1/4">
      <div className="bg-slate-100 flex flex-col rounded-2xl m-3">
        <h1 className="font-black text-lg p-3">Kategori Popular</h1>
        <div className="flex flex-col p-3">
          {
            threads.map((thread) => (
              <h1
                key={thread.id}
                className="text-xl text-black font-bold mb-2"
              >#{thread.category}
              </h1>
            ))
          }

        </div>
      </div>
    </aside>
  );
}

export default Categoriesbar;
