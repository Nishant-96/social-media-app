import axios from "axios";

export const getAllUsersService = async () => {
  try {
    const response = await axios.get("/api/users");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleUserService = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const followUserService = async (userId, token) => {
  try {
    const response = await axios.post(
      `/api/users/follow/${userId}`,
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

export const unfollowUserService = async (userId, token) => {
  try {
    const response = await axios.post(
      `/api/users/unfollow/${userId}`,
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

export const editProfileService = async (userData, token) => {
  try {
    const response = await axios.post(
      "/api/users/edit",
      { userData },
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
