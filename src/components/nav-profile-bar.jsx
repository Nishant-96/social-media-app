import React from "react";

function NavProfileBar() {
  return (
    <div className="flex gap-2 px-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="/assets/demo.jpg"
        alt="avatar"
      />

      <div className="flex flex-col ">
        <p>Chris Gayle</p>
        <p>@chris11</p>
      </div>
    </div>
  );
}

export default NavProfileBar;
