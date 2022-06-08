import React from "react";
import FollowProfileBar from "./follow-profile-bar";

export function FollowListModal({ show, setShow, userProfile }) {
  if (show.followers) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center z-20 bg-[#00000070] p-2"
        onClick={() => setShow((prev) => ({ ...prev, followers: false }))}
      >
        <div
          className="bg-white flex flex-col  rounded-md p-4 gap-4 max-w-xs w-full"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="text-2xl font-semibold">Followers</div>
          {userProfile?.followers?.length > 0 ? (
            userProfile?.followers?.map((curr) => (
              <FollowProfileBar
                key={curr._id}
                profileDetail={curr}
                setShow={setShow}
              />
            ))
          ) : (
            <div className="flex justify-center text-xl font-medium">
              No Followers Yet
            </div>
          )}
        </div>
      </div>
    );
  } else if (show.following) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center z-20 bg-[#00000070] p-2"
        onClick={() => setShow((prev) => ({ ...prev, following: false }))}
      >
        <div
          className="bg-white flex flex-col  rounded-md p-4 gap-4 max-w-xs w-full"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="text-2xl font-semibold">Following</div>
          {userProfile?.following?.length > 0 ? (
            userProfile?.following?.map((curr) => (
              <FollowProfileBar
                key={curr._id}
                profileDetail={curr}
                setShow={setShow}
              />
            ))
          ) : (
            <div className="flex justify-center text-xl font-medium">
              Start Following
            </div>
          )}
        </div>
      </div>
    );
  } else return null;
}
