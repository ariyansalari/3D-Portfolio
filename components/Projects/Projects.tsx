import React from 'react'
import { ProjectLayout } from '..'

export const ProjectsList = ({projects}:any) => {
  return (
    <div className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center'>

        {projects.map((project,index)=>(
            <ProjectLayout key={index} {...project}/>
        ))}
    </div>
  )
}
