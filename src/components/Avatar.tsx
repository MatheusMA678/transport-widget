import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import AvatarImage from "../assets/pessoa.png";

export function Avatar() {
  return (
    <div className="relative flex justify-center w-fit">
      <Image src={AvatarImage} alt="Foto do motorista" />
      <div className="absolute w-24 text-xl rounded-full bg-[#372D3B] text-[#FBF8FC] -bottom-4 flex items-center justify-between py-2 px-5">
        <FaStar />
        <span>5.0</span>
      </div>
    </div>
  );
}
