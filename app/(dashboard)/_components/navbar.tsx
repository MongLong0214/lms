"use client";

import React from "react";
import MobileSidebar from "./mobile_sidebar";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
    </div>
  );
}

export default Navbar;
