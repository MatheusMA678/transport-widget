import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import AvatarImage from "../assets/pessoa.png";

export function Avatar() {
  return (
    <div className="relative flex justify-center w-fit h-24">
      <Image
        src={AvatarImage}
        alt="Foto do motorista"
        className="w-20 h-20 rounded-full"
      />
      <div className="absolute text-sm rounded-full bg-[#372D3B] text-[#FBF8FC] bottom-0 flex items-center gap-1 py-1 px-2">
        <FaStar />
        <span>5.0</span>
      </div>
    </div>
  );
}
