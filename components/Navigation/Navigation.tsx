"use client";
import { BtnList } from "@/constant";
import React from "react";
import { NavButton } from "..";

export const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="fixed h-screen w-full flex items-center justify-center">

    <div className="flex items-center justify-center relative animate-spin-slow hover:pause">
      {BtnList.map((btn, index) => {
        const angleRed = (index * angleIncrement * Math.PI) / 180;
        const radius = `calc(20vw - 1rem)`;
        const x = `calc(${radius}*${Math.cos(angleRed)})`;
        const y = `calc(${radius}*${Math.sin(angleRed)})`;
        console.log(angleRed, x, y, radius);

        return (
    <NavButton key={btn.label} x={x} y={y} {...btn} />
        );
      })}
    </div>
    </div>

  );
};
