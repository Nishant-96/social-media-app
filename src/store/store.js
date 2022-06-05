import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./features/auth-slice";

export const store = configureStore({
  reducer: { auth: authenticationReducer },
});
