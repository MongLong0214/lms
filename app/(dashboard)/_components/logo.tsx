"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {}

function Logo({}: LogoProps) {
  return <Image height={130} width={130} alt="Logo" src="/logo.svg" />;
}

export default Logo;
