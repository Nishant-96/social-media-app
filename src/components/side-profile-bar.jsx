import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUserHandler } from "../store/features/users-slice";

function SideProfileBar({ currUser }) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-4 cursor-pointer py-1"
      onClick={() => navigate(`user/${currUser._id}`)}
    >
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={currUser?.avatarURL}
        alt="avatar"
      />

      <div className="flex flex-col w-[5.8rem] ">
        <p className="font-semibold truncate">{`${currUser.firstName} ${currUser.lastName}`}</p>
        <p className="text-slate-500 truncate">{`@${
          currUser.username.split("@")[0]
        }`}</p>
      </div>

      <button
        className="sidebar-btn"
        onClick={(event) => {
          event.stopPropagation();
          token &&
            dispatch(followUserHandler({ userId: currUser._id, token: token }));
        }}
      >
        Follow
      </button>
    </div>
  );
}

export default SideProfileBar;
