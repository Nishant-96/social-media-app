import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./bottom-nav";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function AppWrapper() {
  return (
    <>
      <Navbar />
      <BottomNav />
      <Outlet />
      <Sidebar />
    </>
  );
}
