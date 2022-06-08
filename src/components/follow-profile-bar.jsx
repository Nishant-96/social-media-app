import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FollowProfileBar({ profileDetail, setShow }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const profileNavigateHandler = () => {
    if (profileDetail.username === user.username) {
      navigate(`/profile`);
    } else {
      navigate(`/user/${profileDetail._id}`);
    }
    setShow({
      edit: false,
      followers: false,
      following: false,
    });
  };

  return (
    <div
      className="flex relative justify-between items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer"
      onClick={profileNavigateHandler}
    >
      <div className="flex gap-2 ">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={profileDetail?.avatarURL || `/assets/demo.png`}
          alt="avatar"
        />
        <div className="flex flex-col ">
          <p className="font-semibold">{`${profileDetail?.firstName} ${profileDetail?.lastName}`}</p>
          <p className="text-slate-500">{`@${
            profileDetail?.username?.split("@")[0]
          }`}</p>
        </div>
      </div>
    </div>
  );
}

export default FollowProfileBar;
