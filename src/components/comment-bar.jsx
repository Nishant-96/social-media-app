import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeCommentHandler } from "../store/features/post-slice";
import { useNavigate } from "react-router-dom";

export function CommentBar({ commentDetail, postId }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const commentOwner = users?.filter(
    (currUser) => currUser?.username === commentDetail?.username
  )[0];

  return (
    <div className="shadow-[0px_0px_2px_#78909c] flex p-4 gap-4">
      <div
        className=" min-w-[3rem] cursor-pointer"

        onClick={() =>
          commentOwner.username === user.username
            ? navigate("/profile")
            : navigate(`/user/${commentOwner._id}`)
        }
      >
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={commentOwner?.avatarURL || "/assets/demo.png"}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col grow gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">{`${commentDetail?.firstName} ${commentDetail?.lastName}`}</p>
            <div className="text-slate-500">{`@${
              commentDetail?.username?.split("@")[0]
            }`}</div>
          </div>
          <DeleteOutlineIcon
            className="cursor-pointer text-slate-500"
            onClick={() => {
              dispatch(
                removeCommentHandler({
                  postId: postId,
                  commentId: commentDetail._id,
                  token: token,
                })
              );
            }}
          />
        </div>
        <p className="text-sm tracking-wide text-justify pr-4">
          {commentDetail?.commentContent}
        </p>
      </div>
    </div>
  );
}
