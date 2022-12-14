import React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Sidebar() {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (

    <header className="flex flex-col w-1/4 h-full justify-start items-start px-10 bg-white">
      <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_051021145713.png" alt="dicoding" className="w-10 mt-2 mb-10 rounded-full " />
      <nav>
        <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200 items-center"><HiOutlineChatAlt2 className="mr-4" /><Link to="/">Threads</Link> </h1>
        <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200 items-center"><MdOutlineLeaderboard className="mr-4" /><Link to="/leaderboard">LeaderBoards</Link> </h1>
        <h1 className="text-xl flex flex-row cursor-pointer rounded-full p-3 hover:bg-slate-200 items-center "><BiLogOut className="mr-4" /><button type="button" onClick={onSignOut}>Logout</button> </h1>
        <h1 className="mt-5 text-lg cursor-pointer py-3 px-5 bg-blue-700 text-white border-2 rounded-full ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex justify-center"><Link to="/new">Buat diskusi</Link></h1>
      </nav>
    </header>
  );
}

export default Sidebar;
