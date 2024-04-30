import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HomeButton = () => {
  return (
    <Link className='text-foreground group rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start' href={'/'} aria-label={'home'} target={"_self"}>
            <span className='relative w-14 h-14 p-4  hover:text-accent '>
                <HomeIcon className='w-full h-auto ' strokeWidth={1.5}/>
            <span  className='peer bg-transparent absolute top-0 left-0 w-full h-full '/>
            <span className='absolute hidden peer-hover:block px-2 py-1 left-full  mx-2 top-1/2 -tranlate-y-1/2 bg-background text-foreground text-sm rounded-md  shadow-lg  whitespace-nowrap'>
                Home
            </span>
            </span>
            
        </Link>
  )
}
