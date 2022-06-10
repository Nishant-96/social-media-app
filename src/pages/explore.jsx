import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../components";
import { sortingFilter } from "../services";

export function Explore() {
  const { allPosts } = useSelector((state) => state.posts);

  const explorePostsArr = sortingFilter(allPosts, "latest");

  return (
    <div className="w-[600px] flex flex-col p-4 ">
      {explorePostsArr.map((currPost) => (
        <Post key={currPost._id} postDetail={currPost} />
      ))}
    </div>
  );
}
