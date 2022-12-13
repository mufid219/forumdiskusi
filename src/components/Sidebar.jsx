import React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

function Sidebar() {
  return (

    <div className="flex flex-col w-1/4 h-full justify-start items-start px-10 bg-white">
      <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_051021145713.png" alt="dicoding" className="w-10 mt-2 mb-10 rounded-full " />

      <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200"><HiOutlineChatAlt2 className="mr-4" /> Threads</h1>
      <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200"><MdOutlineLeaderboard className="mr-4" /> LeaderBoards</h1>
      <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200"><BiLogIn className="mr-4" /> Login</h1>
      <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200"><BiLogOut className="mr-4" /> Logout</h1>
      <h1 className="text-lg cursor-pointer py-3 px-5 bg-blue-500 text-white border-2 rounded-full ml-2 hover:bg-blue-600">Buat diskusi</h1>
    </div>
  );
}

export default Sidebar;
