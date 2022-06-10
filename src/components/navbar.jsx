import React, { useState } from "react";

import "./components.css";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import NavProfileBar from "./nav-profile-bar";
import { Link, NavLink } from "react-router-dom";
import { CreatePostModal } from "./create-post-modal";
export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="hidden md:flex flex-col justify-between p-4 sticky h-screen w-[20rem] bg-white inset-y-0 ">
      <div className="flex flex-col gap-4 items-start">
        <div className="w-20">
          <Link to="/">
            <img
              className="h-auto w-full cursor-pointer"
              src="/assets/logo_social.png"
              alt="logo"
            />
          </Link>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidenav-active" : "sidenav-box"
            }
          >
            <HomeIcon />
            <p>Home</p>
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "sidenav-active" : "sidenav-box"
            }
          >
            <ExploreIcon />
            <p>Explore</p>
          </NavLink>

          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              isActive ? "sidenav-active" : "sidenav-box"
            }
          >
            <BookmarkIcon />
            <p>Bookmarks</p>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "sidenav-active" : "sidenav-box"
            }
          >
            <PersonIcon />
            <p>Profile</p>
          </NavLink>
        </nav>

        <div
          className="w-full bg-sky-600 text-slate-50 flex justify-center cursor-pointer rounded-full py-2 border-2 border-solid border-sky-600 transition-all  duration-300 hover:bg-transparent hover:text-sky-600"
          onClick={() => setShowModal(true)}
        >
          Post
        </div>
      </div>
      <NavProfileBar />
      <CreatePostModal showNew={showModal} setShowNew={setShowModal} />
    </div>
  );
}
