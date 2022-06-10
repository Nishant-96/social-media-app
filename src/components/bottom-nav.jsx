import React, { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { NavLink } from "react-router-dom";
import { CreatePostModal } from "./create-post-modal";

export function BottomNav() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="md:hidden flex justify-around fixed inset-x-0 bottom-0 w-[100%] z-10 py-4 bg-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-slate-50 bg-sky-600 rounded-full p-1"
            : "text-sky-600 cursor-pointer p-1"
        }
      >
        <HomeIcon />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? "text-slate-50 bg-sky-600 rounded-full p-1"
            : "text-sky-600 cursor-pointer p-1"
        }
      >
        <ExploreIcon className="" />
      </NavLink>

      <PostAddIcon
        className="text-slate-50 bg-sky-600 rounded-full p-1"
        onClick={() => setShowModal(true)}
      />

      <NavLink
        to="/bookmark"
        className={({ isActive }) =>
          isActive
            ? "text-slate-50 bg-sky-600 rounded-full p-1"
            : "text-sky-600 cursor-pointer p-1"
        }
      >
        <BookmarkIcon />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "text-slate-50 bg-sky-600 rounded-full p-1"
            : "text-sky-600 cursor-pointer p-1"
        }
      >
        <PersonIcon />
      </NavLink>
      <CreatePostModal showNew={showModal} setShowNew={setShowModal} />
    </div>
  );
}
