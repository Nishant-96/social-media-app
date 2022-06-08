import React from "react";

import "../components/components.css";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Post } from "../components";
import { useSelector } from "react-redux";
export function Home() {
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];
  return (
    <div className="w-[600px] flex flex-col gap-4 p-4 ">
      {/* Post Component */}
      <div className="p-4 shadow-[0px_0px_2px_#78909c] flex flex-col gap-2">
        <div className="flex gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={loggedInUser?.avatarURL || `/assets/demo.png`}
            alt="avatar"
          />
          <textarea
            className="outline-0 border-2 rounded-md resize-none px-1 py-0.5 grow"
            placeholder="What's on your mind?"
            type="text"
          />
        </div>
        <div className="flex justify-between items-center px-1">
          <div className="flex gap-2 items-center">
            <label>
              <ImageIcon className="cursor-pointer text-sky-600" />
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </label>
            <label>
              <GifBoxIcon className="cursor-pointer text-sky-600" />
              <input type="file" accept="image/gif" className="hidden" />
            </label>
          </div>
          <button className="bg-sky-600 text-slate-50 flex justify-center items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-sky-600">
            Post
          </button>
        </div>
      </div>

      {/* Sort Component */}
      <div className="flex  justify-evenly rounded shadow-[0px_0px_2px_#78909c] py-2 flex-wrap gap-2">
        <div className="home-sort-btn">
          <WhatshotIcon />
          Trending
        </div>
        <select className="home-sort-btn " name="sorting" id="sort">
          <option value="latest">Latest Posts</option>
          <option value="oldest">Oldest Posts</option>
        </select>
      </div>

      {/* Feed Component */}
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
