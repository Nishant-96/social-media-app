import axios from "axios";

export const loginService = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const signupService = async (signinDetail) => {
  try {
    const response = await axios.post("/api/auth/signup", { ...signinDetail });
    return response;
  } catch (error) {
    console.error(error);
  }
};
