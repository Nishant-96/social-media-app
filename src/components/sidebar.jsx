import React from "react";

import "./components.css";
import SideProfileBar from "./side-profile-bar";
import SearchIcon from "@mui/icons-material/Search";
export function Sidebar() {
  return (
    <div className="hidden sidebarMedia:flex flex-col gap-4 p-4 w-[20rem] sticky h-screen top-0 bottom-0">
      <div className="flex items-center gap-1 border-2 rounded-md p-2">
        <SearchIcon />
        <input
          type="Search"
          className="outline-0 bg-transparent w-full"
          placeholder="Search User"
        />
      </div>

      <div className="flex flex-col gap-4 rounded shadow-[0px_0px_2px_#78909c] p-4">
        <h3 className="text-lg font-semibold text-center">Who To Follow</h3>
        <SideProfileBar />
        <SideProfileBar />
        <SideProfileBar />
        <SideProfileBar />
      </div>
    </div>
  );
}
