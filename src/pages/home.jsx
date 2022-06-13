import React, { useState } from "react";

import "../components/components.css";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Post } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { sortingFilter } from "../services";
import { createPostHandler, sortHandler } from "../store/features/post-slice";

export function Home() {
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);
  const { allPosts, sortBy } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [newPost, setNewpost] = useState({ content: "", contentImg: "" });

  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];

  const followingsNameArr = loggedInUser?.following.map(
    (curr) => curr.username
  );

  const homePostsArr = allPosts?.filter(
    (currPost) =>
      followingsNameArr?.includes(currPost.username) ||
      currPost?.username === loggedInUser?.username
  );

  const allPostsArr = sortingFilter(homePostsArr, sortBy);

  const postClickHandler = () => {
    if (newPost.content) {
      dispatch(createPostHandler({ postData: newPost, token: token }));
    } else {
      console.error("Enter Conten");
    }
    setNewpost({ content: "" });
  };

  return (
    <div className="w-[600px] flex flex-col gap-4 p-4 ">
      <div className="p-4 shadow-[0px_0px_2px_#78909c] flex flex-col gap-2">
        <div className="flex gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={loggedInUser?.avatarURL || `/assets/demo.png`}
            alt="avatar"
          />
          <textarea
            className="outline-0 border-2 rounded-md resize-none px-1 py-0.5 grow max-w-[28.5rem]"
            placeholder="What's on your mind?"
            type="text"
            value={newPost.content}
            onChange={(event) =>
              setNewpost((prev) => ({ ...prev, content: event.target.value }))
            }
          />
        </div>
        <div className="flex justify-between items-center px-1">
          <div className="flex gap-2 items-center">
            <label className="hidden">
              <ImageIcon className="cursor-pointer text-sky-600" />
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </label>
            <label className="hidden">
              <GifBoxIcon className="cursor-pointer text-sky-600" />
              <input type="file" accept="image/gif" className="hidden" />
            </label>
          </div>
          <button
            className="bg-sky-600 text-slate-50 flex justify-center items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-sky-600"
            onClick={postClickHandler}
          >
            Post
          </button>
        </div>
      </div>

      <div className="flex  justify-evenly rounded shadow-[0px_0px_2px_#78909c] py-2 flex-wrap gap-2">
        <div
          className="home-sort-btn"
          onClick={(event) => dispatch(sortHandler(event.target.innerText))}
        >
          <WhatshotIcon />
          Trending
        </div>
        <select
          className="home-sort-btn "
          name="sorting"
          id="sort"
          onChange={(event) => dispatch(sortHandler(event.target.value))}
        >
          <option value="latest">Latest Posts</option>
          <option value="oldest">Oldest Posts</option>
        </select>
      </div>

      <div>
        {allPostsArr.map((currPost) => (
          <Post key={currPost._id} postDetail={currPost} />
        ))}
      </div>
    </div>
  );
}
