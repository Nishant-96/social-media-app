import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

export function BottomNav() {
  return (
    <div className="md:hidden flex justify-around fixed inset-x-0 bottom-0 w-[100%] z-10 py-4 bg-white">
      <HomeIcon className="text-sky-600 cursor-pointer" />
      <ExploreIcon className="text-sky-600 cursor-pointer" />
      <BookmarkIcon className="text-sky-600 cursor-pointer" />
      <PersonIcon className="text-sky-600 cursor-pointer" />
    </div>
  );
}
