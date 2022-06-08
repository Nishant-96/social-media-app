import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./features/auth-slice";
import { usersReducer } from "./features/users-slice";

export const store = configureStore({
  reducer: { auth: authenticationReducer, users: usersReducer },
});
