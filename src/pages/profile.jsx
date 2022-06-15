import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile, FollowListModal, Post } from "../components";
import { sortingFilter } from "../services";

import { logoutHandler } from "../store/features/auth-slice";
import { getUserPostsHandler } from "../store/features/post-slice";

export function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { singleUserPosts, postApiCallStatus } = useSelector(
    (state) => state.posts
  );
  const [showModal, setShowModal] = useState({
    edit: false,
    followers: false,
    following: false,
  });

  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];

  const profilePostsArr = sortingFilter(singleUserPosts, "latest");

  useEffect(() => {
    dispatch(getUserPostsHandler({ username: loggedInUser?.username }));
  }, [loggedInUser, postApiCallStatus]);

  return (
    <div className="w-[600px] p-4">
      <div className="flex flex-col shadow-[0px_0px_2px_#78909c] gap-4">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={loggedInUser?.avatarURL || `/assets/demo.png`}
              alt="avatar"
            />
            <div className="flex gap-4 flex-wrap">
              <div
                className=" font-semibold px-4 py-2 bg-transparent text-black flex justify-center cursor-pointer rounded-full border border-solid border-slate-400 transition-all  duration-300 hover:bg-slate-200"
                onClick={() =>
                  setShowModal((prev) => ({ ...prev, edit: true }))
                }
              >
                Edit Profile
              </div>
              <div
                className="font-semibold px-4 py-2 bg-red-500 text-white  justify-center cursor-pointer rounded-full border border-solid border-slate-400 flex md:hidden"
                onClick={() => dispatch(logoutHandler())}
              >
                Logout
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="font-semibold">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-slate-500">{`@${
                user.username.split("@")[0]
              }`}</p>
            </div>
            <div>{loggedInUser?.bio}</div>
            <a
              href={loggedInUser?.portfolio}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {loggedInUser?.portfolio}
            </a>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <p className="font-semibold">{profilePostsArr?.length}</p>
                <p className="text-slate-500">Posts</p>
              </div>
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() =>
                  setShowModal((prev) => ({ ...prev, following: true }))
                }
              >
                <p className="font-semibold">
                  {loggedInUser?.following?.length}
                </p>
                <p className="text-slate-500">Following</p>
              </div>
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() =>
                  setShowModal((prev) => ({ ...prev, followers: true }))
                }
              >
                <p className="font-semibold">
                  {loggedInUser?.followers?.length}
                </p>
                <p className="text-slate-500">Followers</p>
              </div>
            </div>
          </div>
        </div>
        {/* feed component */}
        <div>
          {profilePostsArr?.length > 0 ? (
            profilePostsArr?.map((currPost) => (
              <Post key={currPost._id} postDetail={currPost} />
            ))
          ) : (
            <div className="flex gap-4 shadow-[0px_0px_2px_#78909c] p-4 items-center justify-center h-[50vh]">
              <div className="text-xl font-semibold">Start Posting</div>
            </div>
          )}
        </div>
      </div>
      <FollowListModal
        show={showModal}
        setShow={setShowModal}
        userProfile={loggedInUser}
      />
      <EditProfile show={showModal} setShow={setShowModal} />
    </div>
  );
}
