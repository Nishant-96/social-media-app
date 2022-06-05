import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

export function BottomNav() {
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
    </div>
  );
}
