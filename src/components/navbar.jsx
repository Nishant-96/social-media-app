import React from "react";

import "./components.css";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import NavProfileBar from "./nav-profile-bar";
export function Navbar() {
  return (
    <div className="hidden md:flex flex-col justify-between p-4 sticky h-screen w-[20rem] bg-white inset-y-0 ">
      <div className="flex flex-col gap-4 items-start">
        <div className="w-20">
          <img
            className="h-auto w-full cursor-pointer"
            src="/assets/logo_social.png"
            alt="logo"
          />
        </div>

        <nav className="flex flex-col gap-2">
          <div className="sidenav-box">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="sidenav-box">
            <ExploreIcon />
            <p>Explore</p>
          </div>
          <div className="sidenav-box">
            <BookmarkIcon />
            <p>Bookmarks</p>
          </div>
          <div className="sidenav-box">
            <PersonIcon />
            <p>Profile</p>
          </div>
        </nav>

        <div className="w-full bg-sky-600 text-slate-50 flex justify-center cursor-pointer rounded-full py-2 border-2 border-solid border-sky-600 transition-all  duration-300 hover:bg-transparent hover:text-sky-600">
          Post
        </div>
      </div>
      <NavProfileBar />
    </div>
  );
}
