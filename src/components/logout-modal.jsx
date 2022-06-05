import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../store/features/auth-slice";

export function LogoutModal({ show }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return show ? (
    <div className="absolute bottom-[4.7rem] left-12 hidden md:flex flex-col bg-white rounded-md shadow-[0px_0px_2px_#78909c] justify-center items-center after:border-transparent after:border-t-[#78909c60] after:border-[10px] after:border-solid after:absolute  after:content-[''] after:left-[45%] after:top-[100%]">
      <div className="flex gap-6 px-4 py-2 cursor-default">
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
      <div
        className="w-full border-t border-solid flex justify-center py-2 hover:bg-slate-200 hover:text-sky-600"
        onClick={() => dispatch(logoutHandler())}
      >
        {`Logout of @${user.username.split("@")[0]}`}
      </div>
    </div>
  ) : null;
}
