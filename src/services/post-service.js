import axios from "axios";

export const getAllPostsService = async () => {
  try {
    const response = await axios.get("/api/posts");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUserPostsService = async (username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postLikeService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postDislikeService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getBookmarkPostsService = async (token) => {
  try {
    const response = await axios.get("/api/users/bookmark", {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postAddBookmarkService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postRemoveBookmarkService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createPostService = async (postData, token) => {
  try {
    const response = await axios.post(
      "/api/posts",
      {
        postData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deletePostService = async (postId, token) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const editPostService = async (postId, postData, token) => {
  try {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
