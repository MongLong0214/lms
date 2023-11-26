"use client";

import React from "react";
import Logo from "./logo";
import SideberRoutes from "./sidebar_routes";
interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bh-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SideberRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
