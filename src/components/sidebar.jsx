import React, { useEffect } from "react";

import "./components.css";
import SideProfileBar from "./side-profile-bar";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersHandler } from "../store/features/users-slice";

export function Sidebar() {
  const dispatch = useDispatch();
  const { users, getUsersApiFlag } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsersHandler());
  }, [getUsersApiFlag]);

  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];

  const peopleSuggestionsArr = users.filter(
    (currUser) =>
      !loggedInUser.following.some(
        (curr) => curr.username === currUser.username
      ) && currUser.username !== loggedInUser.username
  );

  return (
    <div className="hidden sidebarMedia:flex flex-col gap-4 p-4 w-[20rem] sticky h-screen top-0 bottom-0">
      <div className="flex items-center gap-1 border-2 rounded-md p-2 hidden">
        <SearchIcon />
        <input
          type="Search"
          className="outline-0 bg-transparent w-full"
          placeholder="Search User"
        />
      </div>

      <div className="flex flex-col gap-4 rounded shadow-[0px_0px_2px_#78909c] p-4">
        <h3 className="text-lg font-semibold text-center">Who To Follow</h3>
        {peopleSuggestionsArr?.slice(0, 4)?.map((curr) => (
          <SideProfileBar key={curr._id} currUser={curr} />
        ))}
      </div>
    </div>
  );
}
