import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export function Post() {
  return (
    <div className="flex gap-4 shadow-[0px_0px_2px_#78909c] p-4">
      <div className=" min-w-[48px]">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="/assets/demo.png"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col grow gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="font-semibold">Chris Gayle</p>
            <p className="text-slate-500">@chris11</p>
          </div>
          <MoreVertIcon className="cursor-pointer" />
        </div>
        <p className="text-sm tracking-wide text-justify pr-4">
          Lorem ipsum dolor sit amet. Et porro sequi in magnam galisum aut
          doloribus enim sit reprehenderit consequatur et atque atque eum natus
          eius. Qui repellat dignissimos qui quasi excepturi nam commodi
          perferendis et illo dolores sit explicabo quidem.
        </p>
        <div className="flex justify-between">
          <FavoriteBorderIcon className="cursor-pointer text-slate-500" />
          <CommentIcon className="cursor-pointer text-slate-500" />
          <BookmarkBorderOutlinedIcon className="text-slate-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
