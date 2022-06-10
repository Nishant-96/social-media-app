import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { FollowListModal, Post } from "../components";
import { sortingFilter } from "../services";
import { getUserPostsHandler } from "../store/features/post-slice";

import {
  followUserHandler,
  getSingleUserHandler,
  unfollowUserHandler,
} from "../store/features/users-slice";

export function SingleUserPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { singleUser, users, getUsersApiFlag } = useSelector(
    (state) => state.users
  );
  const { user, token } = useSelector((state) => state.auth);
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

  const followingStatus = loggedInUser?.following.some(
    (curr) => curr.username === singleUser.username
  );

  const clickHandler = () => {
    if (followingStatus) {
      token &&
        dispatch(unfollowUserHandler({ userId: singleUser._id, token: token }));
    } else {
      token &&
        dispatch(followUserHandler({ userId: singleUser._id, token: token }));
    }
  };

  const singleUserPostsArr = sortingFilter(singleUserPosts, "latest");

  useEffect(() => {
    dispatch(getSingleUserHandler(userId));
  }, [userId, getUsersApiFlag]);

  useEffect(() => {
    dispatch(getUserPostsHandler({ username: singleUser.username }));
  }, [userId, singleUser.username, postApiCallStatus]);

  return (
    <div className="w-[600px] p-4">
      <div className="flex flex-col shadow-[0px_0px_2px_#78909c] gap-4">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={singleUser?.avatarURL || `/assets/demo.png`}
              alt="avatar"
            />
            <div className="flex gap-4 flex-wrap">
              <div
                className=" font-semibold px-4 py-2 bg-transparent text-black flex justify-center cursor-pointer rounded-full border border-solid border-slate-400 transition-all  duration-300 hover:bg-slate-200"
                onClick={() => clickHandler()}
              >
                {followingStatus ? "Unfollow" : "Follow"}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="font-semibold">
                {`${singleUser?.firstName} ${singleUser?.lastName}`}
              </p>
              <p className="text-slate-500">{`@${
                singleUser?.username?.split("@")?.[0]
              }`}</p>
            </div>
            <div>{singleUser?.bio}</div>
            <a
              href={loggedInUser?.portfolio}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {singleUser?.portfolio}
            </a>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <p className="font-semibold">10</p>
                <p className="text-slate-500">Posts</p>
              </div>
              <div
                className="flex gap-1  cursor-pointer"
                onClick={() =>
                  setShowModal((prev) => ({ ...prev, following: true }))
                }
              >
                <p className="font-semibold">{singleUser?.following?.length}</p>
                <p className="text-slate-500">Following</p>
              </div>
              <div
                className="flex gap-1  cursor-pointer"
                onClick={() =>
                  setShowModal((prev) => ({ ...prev, followers: true }))
                }
              >
                <p className="font-semibold">{singleUser?.followers?.length}</p>
                <p className="text-slate-500">Followers</p>
              </div>
            </div>
          </div>
        </div>
        {/* feed component */}
        <div>
          {singleUserPostsArr?.length > 0 ? (
            singleUserPostsArr?.map((currPost) => (
              <Post key={currPost._id} postDetail={currPost} />
            ))
          ) : (
            <div className="flex gap-4 shadow-[0px_0px_2px_#78909c] p-4 items-center justify-center h-[50vh]">
              <div className="text-xl font-semibold">User Has No Posts</div>
            </div>
          )}
        </div>
        <FollowListModal
          show={showModal}
          setShow={setShowModal}
          userProfile={singleUser}
        />
      </div>
    </div>
  );
}
