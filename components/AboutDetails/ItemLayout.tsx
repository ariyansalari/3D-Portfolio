'use client'
import React from 'react'
import { motion } from "framer-motion";
import clsx from 'clsx';

export const ItemLayout = ({ children, className }:{children:React.ReactNode,className:string}) => {
    return (
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}
        className={clsx(
          "custom-bg sm:p-8 p-6 rounded-xl flex items-center justify-center space-y-8",
          className
        )}
      >
        {children}
      </motion.div>
    );
  };