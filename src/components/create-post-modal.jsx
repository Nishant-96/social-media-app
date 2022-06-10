import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createPostHandler,
  editPostHandler,
} from "../store/features/post-slice";

export function CreatePostModal({
  showNew,
  setShowNew,
  showEdit,
  setShowEdit,
  postDetail,
  setOptionModal,
}) {
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = showNew
    ? { content: "" }
    : { content: postDetail?.content };
  const [post, setPost] = useState(initialState);
  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];

  const postClickHandler = () => {
    if (post.content) {
      dispatch(createPostHandler({ postData: post, token: token }));
      navigate("/");
    } else {
      console.error("Enter Content");
    }
    setPost({ content: "" });
    setShowNew(false);
  };

  const updateClickHandler = () => {
    if (post.content) {
      dispatch(
        editPostHandler({
          postId: postDetail._id,
          postData: post,
          token: token,
        })
      );
    } else {
      console.error("Enter Content");
    }
    setPost({ content: "" });
    setShowEdit(false);
    setOptionModal(false);
  };

  return showNew || showEdit ? (
    <div
      className="fixed inset-0 bg-[#00000070] z-[100] flex items-center justify-center px-4"
      onClick={() => (showNew ? setShowNew(false) : setShowEdit(false))}
    >
      <div
        className="p-4 shadow-[0px_0px_2px_#78909c] bg-white max-w-[32rem] w-full rounded flex flex-col gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={loggedInUser?.avatarURL || `/assets/demo.png`}
            alt="avatar"
          />
          <textarea
            className="outline-0 border-2 rounded-md  resize-none px-1 py-0.5 grow max-w-[25rem]"
            placeholder="What's on your mind?"
            type="text"
            value={post.content}
            onChange={(event) =>
              setPost((prev) => ({ ...prev, content: event.target.value }))
            }
          />
        </div>
        <div className="flex justify-between items-center px-1">
          {showNew ? (
            <button
              className="bg-sky-600 text-slate-50 flex ml-auto items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-sky-600"
              onClick={postClickHandler}
            >
              Post
            </button>
          ) : (
            <button
              className="bg-sky-600 text-slate-50 flex ml-auto items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-sky-600"
              onClick={updateClickHandler}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
