import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signupHandler } from "../../store/features/auth-slice";

export function Signup() {
  const [signinDetail, setSigninDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formValidation = ({
    firstName,
    lastName,
    email,
    username,
    password,
  }) => {
    if (firstName === "") {
      return { type: false, message: "Invalid First Name" };
    }
    if (lastName === "") {
      return { type: false, message: "Invalid Last Name" };
    }
    if (email === "" || !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      return { type: false, message: "Invalid Email" };
    }
    if (
      username === "" ||
      !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(username)
    ) {
      return { type: false, message: "Invalid User Name Should Contain @" };
    }
    if (password === "" || password.length < 8) {
      return {
        type: false,
        message: "Invalid Password Length Should be 8 or Above",
      };
    }
    return { type: true };
  };

  const signupCLickHandler = async (event, signinDetail) => {
    event.preventDefault();
    const validation = formValidation({ ...signinDetail });
    try {
      if (validation.type) {
        const res = await dispatch(signupHandler({ signinDetail }));
        if (res?.payload.encodedToken) {
          navigate("/");
        }
      } else {
        throw new Error(validation.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="h-screen flex w-full justify-evenly p-4  flex-col items-center md:flex-row">
      <div className="flex flex-col p-4 gap-2 lg:h-[23.75rem]">
        <h1 className="text-8xl font-semibold text-sky-600">Circle</h1>
        <div className="text-2xl text-slate-500 hidden lg:w-[28.1rem] lg:block">
          Circle helps you connect with your social circle and the people in
          your life.
        </div>
      </div>
      {/* form  */}
      <form className="flex flex-col gap-4 p-8 rounded-md shadow-[0px_0px_4px_#78909c] bg-white max-w-[25rem] w-full">
        <div className="flex flex-col gap-1">
          <label>First Name *</label>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded "
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            required
            value={signinDetail.firstName}
            onChange={(event) =>
              setSigninDetail((prev) => ({
                ...prev,
                firstName: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Last Name *</label>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded "
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            required
            value={signinDetail.lastName}
            onChange={(event) =>
              setSigninDetail((prev) => ({
                ...prev,
                lastName: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email *</label>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address"
            value={signinDetail.email}
            onChange={(event) =>
              setSigninDetail((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>User Name *</label>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded "
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            required
            value={signinDetail.username}
            onChange={(event) =>
              setSigninDetail((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password *</label>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded"
            type="password"
            id="pwd"
            name="pwd"
            required
            placeholder="Password"
            value={signinDetail.password}
            onChange={(event) =>
              setSigninDetail((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
        </div>
        <button
          className="font-semibold text-slate-50 flex justify-center items-center cursor-pointer px-4 rounded-md my-1 border-2 border-solid border-emerald-500 transition-all  duration-300 py-2 mx-auto bg-emerald-500"
          onClick={(event) => signupCLickHandler(event, signinDetail)}
        >
          Sign Up
        </button>
        <div className="flex justify-center">
          Already have an account ?
          <Link to="/login">
            <strong className="underline">Sign In</strong>
          </Link>
        </div>
      </form>
    </div>
  );
}
