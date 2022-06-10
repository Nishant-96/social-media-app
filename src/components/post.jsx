import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { calcPostTimeDiff } from "../services";
import {
  postAddBookmarkHandler,
  postDislikeHandler,
  postLikeHandler,
  postRemoveBookmarkHandler,
} from "../store/features/post-slice";
import { useNavigate } from "react-router-dom";
import { EditPostModal } from "./edit-post";

export function Post({ postDetail }) {
  const { user, token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { bookmarkPosts } = useSelector((state) => state.posts);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postOwner = users.filter(
    (currUser) => currUser?.username === postDetail?.username
  )[0];
  const postTime = calcPostTimeDiff(postDetail?.createdAt);
  const likeStatus = postDetail?.likes?.likedBy.some(
    (curr) => curr.username === user.username
  );

  const bookmarkStatus = bookmarkPosts
    .map((curr) => curr._id)
    .includes(postDetail._id);

  return (
    <div className="flex gap-4 shadow-[0px_0px_2px_#78909c] p-4">
      <div
        className=" min-w-[48px] cursor-pointer"
        onClick={() =>
          postOwner.username === user.username
            ? navigate("/profile")
            : navigate(`/user/${postOwner._id}`)
        }
      >
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={postOwner?.avatarURL || "/assets/demo.png"}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col grow gap-3">
        <div className="flex justify-between relative">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">{`${postDetail?.firstName} ${postDetail?.lastName}`}</p>
            <p className="text-slate-500">{`@${
              postDetail?.username?.split("@")[0]
            }`}</p>
            <p className="text-slate-500 ">{postTime}</p>
          </div>
          {postDetail?.username === user.username && (
            <MoreVertIcon
              className="cursor-pointer"
              onClick={() => setShowModal((prev) => !prev)}
            />
          )}
          <EditPostModal
            show={showModal}
            postDetail={postDetail}
            setShow={setShowModal}
          />
        </div>
        <p className="text-sm tracking-wide text-justify pr-4">
          {postDetail?.content}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            {likeStatus ? (
              <FavoriteIcon
                className="cursor-pointer text-rose-600 "
                onClick={() =>
                  dispatch(
                    postDislikeHandler({ postId: postDetail._id, token: token })
                  )
                }
              />
            ) : (
              <FavoriteBorderIcon
                className="cursor-pointer text-slate-500"
                onClick={() =>
                  dispatch(
                    postLikeHandler({ postId: postDetail._id, token: token })
                  )
                }
              />
            )}

            <div>{postDetail?.likes?.likeCount}</div>
          </div>
          <div className="flex gap-1 items-center">
            <CommentIcon
              className="cursor-pointer text-slate-500"
              onClick={() => navigate(`/post/${postDetail._id}`)}
            />
            <div>{postDetail?.comments?.length}</div>
          </div>
          {!bookmarkStatus ? (
            <BookmarkBorderOutlinedIcon
              className="text-slate-500 cursor-pointer"
              onClick={() =>
                dispatch(
                  postAddBookmarkHandler({
                    postId: postDetail._id,
                    token: token,
                  })
                )
              }
            />
          ) : (
            <BookmarkIcon
              className="cursor-pointer text-slate-500"
              onClick={() =>
                dispatch(
                  postRemoveBookmarkHandler({
                    postId: postDetail._id,
                    token: token,
                  })
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
