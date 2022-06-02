import React from "react";
import { Post } from "../components";

export function Profile() {
  return (
    <div className="w-[600px] p-4">
      <div className="flex flex-col shadow-[0px_0px_2px_#78909c] gap-4">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src="/assets/demo.jpg"
              alt="avatar"
            />
            <div className="flex gap-4 flex-wrap">
              <div className=" font-semibold px-4 py-2 bg-transparent text-black flex justify-center cursor-pointer rounded-full border border-solid border-slate-400 transition-all  duration-300 hover:bg-slate-200">
                Edit Profile
              </div>
              <div className="font-semibold px-4 py-2 bg-red-500 text-white  justify-center cursor-pointer rounded-full border border-solid border-slate-400 flex md:hidden">
                Logout
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="font-semibold">Chris Gayle</p>
              <p className="text-slate-500">@chris11</p>
            </div>
            <div>I'm a potato.</div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <p className="font-semibold">10</p>
                <p className="text-slate-500">Posts</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">5</p>
                <p className="text-slate-500">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">15</p>
                <p className="text-slate-500">Followers</p>
              </div>
            </div>
          </div>
        </div>
        {/* feed component */}
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
