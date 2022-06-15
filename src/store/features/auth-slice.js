import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginService, signupService } from "../../services";

const initialState = {
  token: JSON.parse(localStorage.getItem("Social_Auth_Token")) || "",
  user: JSON.parse(localStorage.getItem("Social_Auth_User")) || "",
};

export const loginHandler = createAsyncThunk(
  "authentication/loginHandler",
  async ({ username, password }) => {
    try {
      const response = await loginService(username, password);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const signupHandler = createAsyncThunk(
  "authentication/signupHandler",
  async ({ signinDetail }) => {
    try {
      const response = await signupService(signinDetail);
      if ((response.status = 201)) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      state.token = "";
      state.user = "";
      localStorage.removeItem("Social_Auth_Token");
      localStorage.removeItem("Social_Auth_User");
      toast.success(`Logged Out`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
  extraReducers: {
    [loginHandler.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem(
        "Social_Auth_Token",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem(
        "Social_Auth_User",
        JSON.stringify(action.payload.foundUser)
      );
      toast.success(`Welcome, ${action.payload.foundUser.firstName}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [loginHandler.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [signupHandler.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem(
        "Social_Auth_Token",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem(
        "Social_Auth_User",
        JSON.stringify(action.payload.createdUser)
      );
      toast.success(`Welcome, ${action.payload.createdUser.firstName}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [signupHandler.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const { logoutHandler } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
