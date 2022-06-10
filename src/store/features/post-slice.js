import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPostService,
  deletePostService,
  editPostService,
  getAllPostsService,
  getBookmarkPostsService,
  getUserPostByIdService,
  getUserPostsService,
  postAddBookmarkService,
  postAddCommentService,
  postDislikeService,
  postLikeService,
  postRemoveBookmarkService,
  postRemoveCommentService,
} from "../../services";

const initialState = {
  allPosts: [],
  sortBy: "latest",
  singleUserPosts: [],
  postApiCallStatus: false,
  bookmarkPosts: [],
  singlePost: {},
};

export const getAllpostsHandler = createAsyncThunk(
  "postsDatabase/getAllpostsHandler",
  async () => {
    try {
      const response = await getAllPostsService();
      if (response.status === 200) {
        return response.data.posts;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUserPostsHandler = createAsyncThunk(
  "postsDatabase/getUserPostsHandler",
  async ({ username }) => {
    try {
      const response = await getUserPostsService(username);
      if (response.status === 200) {
        return response.data.posts;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const postLikeHandler = createAsyncThunk(
  "postsDatabase/postLikeHandler",
  async ({ postId, token }) => {
    try {
      const response = await postLikeService(postId, token);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const postDislikeHandler = createAsyncThunk(
  "postsDatabase/postDislikeHandler",
  async ({ postId, token }) => {
    try {
      const response = await postDislikeService(postId, token);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const getBookmarkPostsHandler = createAsyncThunk(
  "postsDatabase/getBookmarkPostsHandler",
  async ({ token }) => {
    try {
      const response = await getBookmarkPostsService(token);
      return response.data.bookmarks;
    } catch (error) {
      console.error(error);
    }
  }
);
export const postAddBookmarkHandler = createAsyncThunk(
  "postsDatabase/postAddBookmarkHandler",
  async ({ postId, token }) => {
    try {
      const response = await postAddBookmarkService(postId, token);
    } catch (error) {
      console.error(error);
    }
  }
);

export const postRemoveBookmarkHandler = createAsyncThunk(
  "postsDatabase/postRemoveBookmarkHandler",
  async ({ postId, token }) => {
    try {
      const response = await postRemoveBookmarkService(postId, token);
    } catch (error) {
      console.error(error);
    }
  }
);

export const createPostHandler = createAsyncThunk(
  "postsDatabase/createPostHandler",
  async ({ postData, token }) => {
    try {
      const response = await createPostService(postData, token);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deletePostHandler = createAsyncThunk(
  "postsDatabase/deletePostHandler",
  async ({ postId, token }) => {
    try {
      const response = await deletePostService(postId, token);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editPostHandler = createAsyncThunk(
  "postsDatabase/editPostHandler",
  async ({ postId, postData, token }) => {
    try {
      const response = await editPostService(postId, postData, token);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getPostByIdHandler = createAsyncThunk(
  "postsDatabase/getPostByIdHandler",
  async ({ postId }) => {
    try {
      const response = await getUserPostByIdService(postId);
      if (response.status === 200) {
        return response.data.post;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const addCommentHandler = createAsyncThunk(
  "postsDatabase/addCommentHandler",
  async ({ postId, commentData, token }) => {
    try {
      const response = await postAddCommentService(postId, commentData, token);
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeCommentHandler = createAsyncThunk(
  "postsDatabase/removeCommentHandler",
  async ({ postId, commentId, token }) => {
    try {
      const response = await postRemoveCommentService(postId, commentId, token);
    } catch (error) {
      console.error(error);
    }
  }
);

const postsDatabaseSlice = createSlice({
  name: "postsDatabase",
  initialState,
  reducers: {
    sortHandler: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: {
    [getAllpostsHandler.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
    },
    [getAllpostsHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [getUserPostsHandler.fulfilled]: (state, action) => {
      state.singleUserPosts = action.payload;
    },
    [getUserPostsHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [postLikeHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [postLikeHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [postDislikeHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [getBookmarkPostsHandler.fulfilled]: (state, action) => {
      state.bookmarkPosts = action.payload;
    },
    [getBookmarkPostsHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [postAddBookmarkHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [postAddBookmarkHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [postRemoveBookmarkHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [postRemoveBookmarkHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [createPostHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [createPostHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [deletePostHandler.fulfilled]: (state, action) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [deletePostHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [editPostHandler.fulfilled]: (state, action) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [editPostHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [getPostByIdHandler.fulfilled]: (state, action) => {
      state.singlePost = action.payload;
    },
    [addCommentHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [addCommentHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [removeCommentHandler.fulfilled]: (state) => {
      state.postApiCallStatus = !state.postApiCallStatus;
    },
    [removeCommentHandler.rejected]: (action) => {
      console.error(action.payload);
    },
  },
});

export const { sortHandler } = postsDatabaseSlice.actions;

export const postsReducer = postsDatabaseSlice.reducer;
