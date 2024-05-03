'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { ProjectDetails } from '..';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:1.5
    },
  },
};
export const ProjectsList = ({projects}:any) => {
  return (
    <motion.div variants={container} initial="hidden" whileInView={"show"} className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 md:space-y-8 space-y-6 flex flex-col items-center'>

        {projects.map((project:any,index:number)=>(
            <ProjectDetails key={index} {...project}/>
        ))}
    </motion.div>
  )
}
