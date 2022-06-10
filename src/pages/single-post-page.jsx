import React, { useEffect, useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { CommentBar } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { calcPostTimeDiff } from "../services";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostByIdHandler,
  postAddBookmarkHandler,
  postDislikeHandler,
  postLikeHandler,
  postRemoveBookmarkHandler,
  addCommentHandler,
} from "../store/features/post-slice";
import { EditPostModal } from "../components/edit-post";

export function SinglePostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singlePost, bookmarkPosts, postApiCallStatus } = useSelector(
    (state) => state.posts
  );
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState({ commentContent: "" });

  const postOwner = users?.filter(
    (currUser) => currUser?.username === singlePost?.username
  )[0];

  const bookmarkStatus = bookmarkPosts
    .map((curr) => curr._id)
    .includes(singlePost._id);
  const likeStatus = singlePost?.likes?.likedBy.some(
    (curr) => curr.username === user.username
  );
  useEffect(() => {
    dispatch(getPostByIdHandler({ postId: postId }));
  }, [postId, postApiCallStatus]);
  const postTime = calcPostTimeDiff(singlePost?.createdAt);

  return (
    <div className="w-[37.5rem] p-4">
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
              <p className="font-semibold">{`${singlePost?.firstName} ${singlePost?.lastName}`}</p>
              <p className="text-slate-500">{`@${
                singlePost?.username?.split("@")[0]
              }`}</p>
              <p className="text-slate-500 ">{postTime}</p>
            </div>
            {singlePost?.username === user.username && (
              <MoreVertIcon
                className="cursor-pointer"
                onClick={() => setShowModal((prev) => !prev)}
              />
            )}
            <EditPostModal
              show={showModal}
              postDetail={singlePost}
              setShow={setShowModal}
              singlePostIdRoute={postId}
            />
          </div>
          <p className="text-sm tracking-wide text-justify pr-4 text-lg">
            {singlePost?.content}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              {likeStatus ? (
                <FavoriteIcon
                  className="cursor-pointer text-rose-600 "
                  onClick={() =>
                    dispatch(
                      postDislikeHandler({
                        postId: singlePost._id,
                        token: token,
                      })
                    )
                  }
                />
              ) : (
                <FavoriteBorderIcon
                  className="cursor-pointer text-slate-500"
                  onClick={() =>
                    dispatch(
                      postLikeHandler({ postId: singlePost._id, token: token })
                    )
                  }
                />
              )}

              <div>{singlePost?.likes?.likeCount}</div>
            </div>
            <div className="flex gap-1 items-center">
              <CommentIcon className="cursor-pointer text-slate-500" />
              <div>{singlePost?.comments?.length}</div>
            </div>
            {!bookmarkStatus ? (
              <BookmarkBorderOutlinedIcon
                className="text-slate-500 cursor-pointer"
                onClick={() =>
                  dispatch(
                    postAddBookmarkHandler({
                      postId: singlePost._id,
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
                      postId: singlePost._id,
                      token: token,
                    })
                  )
                }
              />
            )}
          </div>
        </div>
      </div>

      <div className="shadow-[0px_0px_2px_#78909c]  rounded h-12 w-full flex justify-between p-1 items-center">
        <input
          className="h-full outline-none px-1 w-full bg-white"
          type="text"
          id="comment"
          name="comment"
          value={comment.commentContent}
          onChange={(event) =>
            setComment((prev) => ({
              ...prev,
              commentContent: event.target.value,
            }))
          }
        />
        <button
          className="bg-sky-600 text-slate-50 flex ml-auto items-center cursor-pointer h-full px-2 rounded-md  border-2 border-solid border-sky-600"
          onClick={() => {
            dispatch(
              addCommentHandler({
                postId: postId,
                commentData: comment,
                token: token,
              })
            );
            setComment((prev) => ({
              ...prev,
              commentContent: "",
            }));
          }}
        >
          Comment
        </button>
      </div>

      <div className="flex flex-col">
        {singlePost?.comments?.length > 0
          ? singlePost?.comments?.map((currComment) => (
              <CommentBar
                key={currComment._id}
                commentDetail={currComment}
                postId={postId}
              />
            ))
          : null}
      </div>
    </div>
  );
}
