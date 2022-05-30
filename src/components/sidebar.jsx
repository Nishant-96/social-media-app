import React from "react";

import "./components.css";
import SideProfileBar from "./side-profile-bar";
import SearchIcon from "@mui/icons-material/Search";
export function Sidebar() {
  return (
    <div className="flex flex-col gap-2 p-4 ">
      <div className="flex items-center gap-1 border-2 rounded-md p-2">
        <SearchIcon />
        <input
          type="Search"
          className="outline-0 bg-transparent w-full"
          placeholder="Search User"
        />
      </div>

      <div className="flex flex-col gap-4 rounded shadow-xl p-4">
        <h3 className="text-lg font-semibold text-center">Sort By</h3>
        <div className="sidebar-btn py-1 mx-4">Trending</div>
        <select className="sidebar-btn py-1 mx-4" name="sorting" id="sort">
          <option value="latest">Latest Posts</option>
          <option value="oldest">Oldest Posts</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 rounded shadow-xl p-4">
        <h3 className="text-lg font-semibold text-center">Who To Follow</h3>
        <SideProfileBar />
        <SideProfileBar />
        <SideProfileBar />
        <SideProfileBar />
      </div>
    </div>
  );
}
