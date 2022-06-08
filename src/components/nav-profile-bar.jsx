import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LogoutModal } from "./logout-modal";
import { useSelector } from "react-redux";
function NavProfileBar() {
  const [showModal, setModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];
  
  return (
    <div
      className="flex relative justify-between items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer"
      onClick={() => setModal((prev) => !prev)}
    >
      <div className="flex gap-2 ">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={loggedInUser?.avatarURL || `/assets/demo.png`}
          alt="avatar"
        />
        <div className="flex flex-col ">
          <p className="font-semibold">{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</p>
          <p className="text-slate-500">{`@${
            loggedInUser?.username.split("@")[0]
          }`}</p>
        </div>
      </div>
      <MoreVertIcon />
      <LogoutModal show={showModal} profileDetail={loggedInUser} />
    </div>
  );
}

export default NavProfileBar;
