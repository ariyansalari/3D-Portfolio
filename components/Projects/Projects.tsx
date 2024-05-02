import React from 'react'
import { ProjectLayout } from '..'

export const ProjectsList = ({projects}:any) => {
  return (
    <div className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 md:space-y-8 space-y-6 flex flex-col items-center'>

        {projects.map((project,index)=>(
            <ProjectLayout key={index} {...project}/>
        ))}
    </div>
  )
}
