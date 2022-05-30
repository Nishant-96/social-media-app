import React from "react";

function SideProfileBar() {
  return (
    <div className="flex gap-4 cursor-pointer py-1">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="/assets/demo.jpg"
        alt="avatar"
      />

      <div className="flex flex-col ">
        <p>Chris Gayle</p>
        <p>@chris11</p>
      </div>

      <button className="sidebar-btn">Follow</button>
    </div>
  );
}

export default SideProfileBar;
