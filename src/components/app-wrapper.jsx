import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./bottom-nav";
import { CreatePostModal } from "./create-post-modal";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function AppWrapper() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <BottomNav />
      <Outlet />
      <Sidebar />
      <CreatePostModal showNew={showModal} setShowNew={setShowModal} />
    </>
  );
}
