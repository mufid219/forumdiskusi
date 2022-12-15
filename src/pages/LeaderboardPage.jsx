import React from 'react';
import Categoriesbar from '../components/Categoriesbar';
import Sidebar from '../components/Sidebar';

function LeaderboardPage() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <div className="flex-1 bg-white border-x-2 ">
        <div className="flex flex-row p-3 border-b-2">
          <h1 className="text-2xl font-semibold ">Klasemen pengguna aktif</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Pengguna
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categoriesbar />
    </div>
  );
}

export default LeaderboardPage;
