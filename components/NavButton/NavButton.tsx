import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getIcon =(icon)=>{
switch(icon){
    case 'home':
        return <Home className='w-full h-auto' strokeWidth={1.5}/>
        case 'about':
            return <User className='w-full h-auto' strokeWidth={1.5}/>
            case 'projects':
                return <Palette className='w-full h-auto' strokeWidth={1.5}/>
                case 'contact':
                    return <Phone className='w-full h-auto' strokeWidth={1.5}/>
                    case 'github':
                        return <Github className='w-full h-auto' strokeWidth={1.5}/>
                        case 'linkedin':
                            return <Linkedin className='w-full h-auto' strokeWidth={1.5}/>
                            case 'twitter':
                                return <Twitter className='w-full h-auto' strokeWidth={1.5}/>
                                case 'resume':
                                    return <NotebookText className='w-full h-auto' strokeWidth={1.5}/>
        default:
        return <Home className='w-full h-auto' strokeWidth={1.5}/>

}
}
export const NavButton = ({x,y,label,icon,newTab,link}) => {
  return (
    <div className='absolute cursor-pointer z-50' style={{
        transform:`translate(${x},${y})`
    }}>
        <Link className='text-foreground rounded-full flex items-center justify-center' href={link} aria-label={label} target={newTab?"_blank":"_self"}>
            <span className='relative w-14 h-14 p-4'>
            {getIcon(icon)}
            </span>
        </Link>
        
        </div>

  )
}
