import React from 'react';
import { BiComment, BiDislike, BiLike } from 'react-icons/bi';

function Detail() {
  return (
    <div className="border-2 rounded-2xl m-3">
      <div className="flex flex-col p-5">
        <h1 className=" text-black border-2 w-fit rounded-xl p-2 mb-2">#React</h1>
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Pengalaman Belajar React di Dicoding</h1>
        <h1 className="mb-1">Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</h1>
        <div className="flex flex-row justify-start gap-x-2 items-center">
          <h1 className="text-sm flex cursor-pointer items-center "><BiLike className="mr-1" /> 3</h1>
          <h1 className="text-sm flex cursor-pointer items-center "><BiDislike className="mr-1" /> 3</h1>
          <h1 className="text-sm flex cursor-pointer items-center"><BiComment className="mr-1" /> 3</h1>
          <h1 className="text-xs">29 hari lalu</h1>
          <h1 className="text-xs">Dibuat oleh Jinbei</h1>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Beri Komentar</h1>
        <div className="mb-2">
          <textarea className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
        </div>
        <div className="mt-6">
          <button type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Kirim</button>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Komentar (1)</h1>
        <div className="flex flex-col w-full border-2 rounded-2xl p-3">
          <div className="flex flex-row items-center justify-between mb-2">
            <div className="flex flex-row items-center justify-start">
              <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="" className="w-6 h-6 rounded-full mr-2" />
              <p className="text-lg font-bold">Jinbei</p>
            </div>
            <p className="">31 hari</p>
          </div>
          <h1 className="mb-1">Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</h1>
          <div className="flex flex-row justify-start gap-x-4 items-center">
            <h1 className="text-sm flex cursor-pointer items-center "><BiLike className="mr-1" /> 3</h1>
            <h1 className="text-sm flex cursor-pointer items-center "><BiDislike className="mr-1" /> 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
