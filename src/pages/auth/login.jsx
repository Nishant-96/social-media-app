import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../../store/features/auth-slice";

export function Login() {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formValidation = (username, password) => {
    if (
      username === "" ||
      !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(username)
    ) {
      return { type: false, message: "Invalid User Name" };
    }
    if (password === "") {
      return { type: false, message: "Invalid Password" };
    }
    return { type: true };
  };

  const loginClickHandler = async (username, password) => {
    const validation = formValidation(username, password);
    try {
      if (validation.type) {
        const res = await dispatch(loginHandler({ username, password }));
        if (res?.payload.encodedToken) {
          navigate("/");
        }
      } else {
        throw new Error(validation.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="h-screen flex w-full justify-evenly p-4  flex-col items-center md:flex-row">
      {/* name */}
      <div className="flex flex-col p-4 gap-2 lg:h-[23.75rem]">
        <h1 className="text-8xl font-semibold text-sky-600">Circle</h1>
        <div className="text-2xl text-slate-500 hidden lg:w-[28.1rem] lg:block">
          Circle helps you connect with your social circle and the people in
          your life.
        </div>
      </div>
      {/* form  */}
      <div className="flex flex-col gap-4 p-8 rounded-md shadow-[0px_0px_4px_#78909c] bg-white max-w-[25rem] w-full">
        <input
          className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded h-12"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={loginInput.email}
          onChange={(event) =>
            setLoginInput((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          className="border-2 p-2 border-solid border-slate-400 h-12 outline-sky-600 rounded"
          type="password"
          id="pwd"
          name="pwd"
          value={loginInput.password}
          placeholder="Password"
          onChange={(event) =>
            setLoginInput((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <button
          className="sidebar-btn py-2 font-semibold"
          onClick={() =>
            loginClickHandler(loginInput.email, loginInput.password)
          }
        >
          Login
        </button>
        <button
          className="sidebar-btn py-2 font-semibold"
          onClick={() => loginClickHandler("peterparker@gmail.com", "peter123")}
        >
          Guest Login
        </button>
        <button
          className="font-semibold text-slate-50 flex justify-center items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-emerald-500 transition-all  duration-300 py-2 mx-auto bg-emerald-500"
          onClick={() => navigate("/signup")}
        >
          Create New Account
        </button>
      </div>
    </div>
  );
}
