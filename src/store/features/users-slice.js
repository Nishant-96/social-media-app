import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  editProfileService,
  followUserService,
  getAllUsersService,
  getSingleUserService,
  unfollowUserService,
} from "../../services";

const initialState = { users: [], singleUser: {}, getUsersApiFlag: false };

export const getAllUsersHandler = createAsyncThunk(
  "usersDatabase/getAllUsersHandler",
  async () => {
    try {
      const response = await getAllUsersService();
      if (response.status === 200) {
        return response.data.users;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const followUserHandler = createAsyncThunk(
  "usersDatabase/followUserHandler",
  async ({ userId, token }) => {
    try {
      const response = await followUserService(userId, token);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const unfollowUserHandler = createAsyncThunk(
  "usersDatabase/unfollowUserHandler",
  async ({ userId, token }) => {
    try {
      const response = await unfollowUserService(userId, token);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const getSingleUserHandler = createAsyncThunk(
  "usersDatabase/getSingleUserHandler",
  async (userId) => {
    try {
      const response = await getSingleUserService(userId);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const editUserHandler = createAsyncThunk(
  "usersDatabase/editUserHandler",
  async ({ profileDetail, token }) => {
    try {
      const response = await editProfileService(profileDetail, token);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

const usersDatabaseSlice = createSlice({
  name: "usersDatabase",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      state.token = "";
      state.user = "";
      localStorage.removeItem("Social_Auth_Token");
      localStorage.removeItem("Social_Auth_User");
    },
  },
  extraReducers: {
    [getAllUsersHandler.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getAllUsersHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [followUserHandler.fulfilled]: (state, action) => {
      state.getUsersApiFlag = !state.getUsersApiFlag;
    },
    [followUserHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [getSingleUserHandler.fulfilled]: (state, action) => {
      state.singleUser = action.payload.user;
    },
    [getSingleUserHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [unfollowUserHandler.fulfilled]: (state, action) => {
      state.getUsersApiFlag = !state.getUsersApiFlag;
    },
    [unfollowUserHandler.rejected]: (action) => {
      console.error(action.payload);
    },
    [editUserHandler.fulfilled]: (state, action) => {
      state.getUsersApiFlag = !state.getUsersApiFlag;
    },
    [editUserHandler.rejected]: (action) => {
      console.error(action.payload);
    },
  },
});

export const usersReducer = usersDatabaseSlice.reducer;
