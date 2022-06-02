import React from "react";

export function Login() {
  return (
    <div className="h-screen flex w-full justify-evenly p-4  flex-col items-center md:flex-row">
      {/* name */}
      <div className="flex flex-col p-4 gap-2 lg:h-[23.75rem]">
        <h1 className="text-8xl font-semibold text-sky-600">Circle</h1>
        <div className="text-2xl text-slate-500 hidden lg:w-[28.1rem] lg:block">
          Circle helps you connect with your social circle and the people in
          your life.
        </div>
      </div>
      {/* form  */}
      <div className="flex flex-col gap-4 p-8 rounded-md shadow-[0px_0px_4px_#78909c] bg-white max-w-[25rem] w-full">
        <input
          className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded h-12"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="border-2 p-2 border-solid border-slate-400 h-12 outline-sky-600 rounded"
          type="password"
          id="pwd"
          name="pwd"
          placeholder="Password"
        />
        <button className="sidebar-btn py-2 font-semibold">Login</button>
        <button className="sidebar-btn py-2 font-semibold">Guest Login</button>
        <button className="font-semibold text-slate-50 flex justify-center items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-emerald-500 transition-all  duration-300 py-2 mx-auto bg-emerald-500">
          Create New Account
        </button>
      </div>
    </div>
  );
}
