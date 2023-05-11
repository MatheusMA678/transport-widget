"use client";

import { Avatar } from "@/components/Avatar";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-8 h-screen flex items-center justify-center bg-gray-200">
      <motion.section
        drag
        className={`flex flex-col justify-between w-[600px] h-[400px] rounded-3xl bg-white shadow-lg px-14 py-6 text-[#372D3B]`}
      >
        <div className="w-[150px] h-2 rounded-xl bg-[#E5D8EA] self-center"></div>
        <section>
          <h1 className="font-bold text-2xl">
            Encontre <span className="text-[#864293]">Boris</span> no local de
            partida
          </h1>
          <span className="text-sm font-medium">
            Chega em 3 minutos (800 metros)
          </span>
        </section>
        <Avatar />
      </motion.section>
    </main>
  );
}
