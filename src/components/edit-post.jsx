import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostHandler } from "../store/features/post-slice";
import { CreatePostModal } from "./create-post-modal";

export function EditPostModal({ show, postDetail, setShow }) {
  const [editPostModal, setEditPostModal] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return show ? (
    <div className="absolute flex flex-col right-7 bg-white rounded-md shadow-[0px_0px_2px_#78909c] justify-center items-center">
      <div
        className="flex gap-6 px-4 py-2 cursor-default hover:bg-slate-200 hover:text-sky-600 cursor-pointer"
        onClick={() => {
          setEditPostModal(true);
        }}
      >
        Edit Post
      </div>
      <div
        className="w-full border-t border-solid flex justify-center py-2 hover:bg-slate-200 hover:text-sky-600 cursor-pointer"
        onClick={() => {
          dispatch(deletePostHandler({ postId: postDetail._id, token: token }));
          setShow(false);
        }}
      >
        Delete Post
      </div>
      <CreatePostModal
        showEdit={editPostModal}
        setShowEdit={setEditPostModal}
        postDetail={postDetail}
        setOptionModal={setShow}
      />
    </div>
  ) : null;
}
