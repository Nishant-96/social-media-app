import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { editUserHandler } from "../store/features/users-slice";

import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export function EditProfile({ show, setShow }) {
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loggedInUser = users.filter(
    (curr) => curr.username === user.username
  )[0];

  const [profileDetail, setProfileDetails] = useState(loggedInUser);

  useEffect(() => {
    setProfileDetails(loggedInUser);
  }, [users, loggedInUser]);

  const uploadImageHandler = async (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "xvk1bbmw");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/dnkpd7qq8/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setProfileDetails((prev) => ({
          ...prev,
          avatarURL: json.url,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return show.edit ? (
    <div
      className="fixed inset-0 flex justify-center items-center z-20 bg-[#00000070] p-2"
      onClick={() => {
        setShow((prev) => ({ ...prev, edit: false }));
        setProfileDetails(loggedInUser);
      }}
    >
      <div
        className="bg-white flex flex-col  rounded-md p-4 gap-4 max-w-md w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">Edit Profile</div>
          <CloseIcon
            onClick={() => {
              setShow((prev) => ({ ...prev, edit: false }));
              setProfileDetails(loggedInUser);
            }}
          />
        </div>
        <div className="flex justify-center relative">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={profileDetail?.avatarURL || `/assets/demo.png`}
            alt="avatar"
          />
          <label className="absolute bottom-0 right-[38%]">
            <CameraAltIcon className="cursor-pointer text-sky-600" />
            <input
              type="file"
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              className="hidden"
              onChange={(event) => uploadImageHandler(event.target.files[0])}
            />
          </label>
        </div>
        <div className="flex gap-2">
          <div>Name:</div>
          <div>{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</div>
        </div>
        <div>
          <div>Bio:</div>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded h-10 w-full"
            type="text"
            name="bio"
            value={profileDetail?.bio}
            onChange={(event) =>
              setProfileDetails((prev) => ({
                ...prev,
                bio: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <div>Website:</div>
          <input
            className="border-2 p-2 border-solid border-slate-400 outline-sky-600 rounded h-10 w-full"
            type="text"
            name="website"
            value={profileDetail?.portfolio}
            onChange={(event) =>
              setProfileDetails((prev) => ({
                ...prev,
                portfolio: event.target.value,
              }))
            }
          />
        </div>
        <div
          className="sidebar-btn mx-auto py-2"
          onClick={() => {
            token && dispatch(editUserHandler({ profileDetail, token }));
            setShow((prev) => ({ ...prev, edit: false }));
          }}
        >
          Save button
        </div>
      </div>
    </div>
  ) : null;
}
