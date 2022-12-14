import React from 'react';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';

function ForumList() {
  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-col w-full border-2 rounded-2xl p-3">
        <h1 className=" text-black border-2 w-fit rounded-xl p-2 mb-2">#React</h1>
        <h1 className="text-lg font-bold text-black cursor-pointer">Pengalaman Belajar React di Dicoding</h1>
        <h1 className="text-sm mb-1">Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</h1>
        <div className="flex flex-row justify-start gap-x-2 items-center">
          <h1 className="text-sm flex cursor-pointer items-center "><BiLike className="mr-1" /> 3</h1>
          <h1 className="text-sm flex cursor-pointer items-center "><BiDislike className="mr-1" /> 3</h1>
          <h1 className="text-sm flex cursor-pointer items-center"><BiComment className="mr-1" /> 3</h1>
          <h1 className="text-xs">29 hari lalu</h1>
          <h1 className="text-xs">Dibuat oleh Jinbei</h1>
        </div>
      </div>
    </div>
  );
}

export default ForumList;
