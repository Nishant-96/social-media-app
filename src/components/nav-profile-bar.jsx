import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function NavProfileBar() {
  return (
    <div className="flex justify-between items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer">
      <div className="flex gap-2 ">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="/assets/demo.jpg"
          alt="avatar"
        />
        <div className="flex flex-col ">
          <p className="font-semibold">Chris Gayle</p>
          <p className="text-slate-500">@chris11</p>
        </div>
      </div>
      <MoreVertIcon />
    </div>
  );
}

export default NavProfileBar;
