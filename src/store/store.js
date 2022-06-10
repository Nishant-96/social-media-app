import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./features/auth-slice";
import { postsReducer } from "./features/post-slice";
import { usersReducer } from "./features/users-slice";

export const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});
