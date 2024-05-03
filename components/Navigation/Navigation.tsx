"use client";
import { BtnList } from "@/constant";
import React from "react";
import { NavButton, ResponsiveComponent } from "..";
import { useScreenSize } from "@/hooks";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed h-screen w-full flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }:any) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center relative animate-spin-slow hover:pause"
            >
              {BtnList.map((btn, index) => {
                const angleRed = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? `calc(20vw - 1rem)`
                  : isMedium
                  ? `calc(30vw - 1rem)`
                  : `calc(40vw - 1rem)`;
                const x = `calc(${radius}*${Math.cos(angleRed)})`;
                const y = `calc(${radius}*${Math.sin(angleRed)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
              variants={container}
              initial="hidden"
              animate="show"
           
              className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start xs:items-center justify-center relative space-y-4  group">
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
              variants={container}
              initial="hidden"
              animate="show" 
              className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center relative space-y-4  group">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        labelDirection={"left"}
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};
