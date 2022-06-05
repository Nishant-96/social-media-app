import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LogoutModal } from "./logout-modal";
import { useSelector } from "react-redux";
function NavProfileBar() {
  const [showModal, setModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="flex relative justify-between items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer"
      onClick={() => setModal((prev) => !prev)}
    >
      <div className="flex gap-2 ">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="/assets/demo.jpg"
          alt="avatar"
        />
        <div className="flex flex-col ">
          <p className="font-semibold">{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-slate-500">{`@${user.username.split("@")[0]}`}</p>
        </div>
      </div>
      <MoreVertIcon />
      <LogoutModal show={showModal} />
    </div>
  );
}

export default NavProfileBar;
