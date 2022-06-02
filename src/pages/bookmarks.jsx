import React from "react";
import { Post } from "../components";

export function Bookmarks() {
  return (
    <div className="w-[600px] flex flex-col p-4 ">
      <Post />
      <Post />
    </div>
  );
}
