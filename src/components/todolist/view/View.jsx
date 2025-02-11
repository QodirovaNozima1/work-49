import { useStateValue } from "@/context";
import { IoPersonCircleOutline } from "react-icons/io5";
import React, { useState} from "react";

const View = () => {
  const { userData } = useStateValue();
  console.log(userData);

  return (
    <div className="flex gap-3 flex-wrap flex-row justify-center text-center w-[50%] h-full">
      {userData?.map((user) => (
        <div
          className="p-2 flex flex-col justify-start text-start bg-slate-100 shadow-lg gap-2 shadow-slate-500/40  rounded-xl w-[270px]"key={user.id}
        >
          <h2 className="  ml-14 text-9xl text-cyan-500 pb-2">
          <IoPersonCircleOutline />
          </h2>
          <p className="text-xl text-gray-700 font-mono border  rounded-2xl  p-[6px]">
            <span className="text-gray-500">Firstname:</span>
           {user.firstname}
          </p>
          <p className="text-xl text-gray-700 font-mono border  rounded-2xl p-[4px]">
            <span className="text-gray-500 font-mono">Lastname:</span>
            {user.lastname}
          </p>
          <p className="text-xl text-gray-700 font-mono border  rounded-2xl p-[4px]">
            <span className="text-gray-500 font-mono">Profession:</span>
            {user.profession}
          </p>
          <p className="text-xl text-gray-700 font-mono border  rounded-2xl p-[4px]">
            <span className="text-gray-500 font-mono">Birthdate:</span>
            {user.birthDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default View;
