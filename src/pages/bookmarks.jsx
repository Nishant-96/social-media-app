import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components";
import { getBookmarkPostsHandler } from "../store/features/post-slice";

export function Bookmarks() {
  const { bookmarkPosts } = useSelector((state) => state.posts);
  const bookmarkPostsArr = [...bookmarkPosts].reverse();
  return (
    <div className="w-[600px] flex flex-col p-4 ">
      {bookmarkPosts.length > 0 ? (
        bookmarkPostsArr.map((currPost) => (
          <Post key={currPost._id} postDetail={currPost} />
        ))
      ) : (
        <div className="flex gap-4 shadow-[0px_0px_2px_#78909c] p-4 items-center justify-center h-[100%]">
          <div className="text-xl font-semibold">Save Posts for Later</div>
        </div>
      )}
    </div>
  );
}
