'use client'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


const Modal =({onClose,toggle}:any)=>{
    return createPortal(
        <div className='fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center'>

            <div className='bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8 '>
                <p className='font-light '>Do you like to play background music?</p>
                <div className='flex items-center justify-center space-x-4'>
                <button onClick={toggle} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded-sm mr-2'>Yes</button>
                <button onClick={onClose} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded-sm '>No</button>
                </div>
              

            </div>
        </div>,
     document.getElementById('my-modal')!
    )
}
export const Sound = () => {
    const audioRef=useRef<any>(null)
    const [isPlaying,setIsplaying]=useState(false)
    const [showModal,setShowModal]=useState(false)

const handleFirstUserInteraction=()=>{
    const music=localStorage.getItem('music')

    if(music==='true'&& !isPlaying){
        audioRef.current.play()
        setIsplaying(true)
    }
    ['click','keydown','touchstart'].forEach((event)=>document.removeEventListener(event,handleFirstUserInteraction))

}
    useEffect(()=>{
const consent=localStorage.getItem('music')
const musicTime=localStorage.getItem('musicTime')

// @ts-ignore
if(consent && musicTime &&  new Date(musicTime).getTime()+3*24*60*60*1000 > new Date() ){
    setIsplaying(consent==='true')

    if(consent==="true"){
        ['click','keydown','touchstart'].forEach((event)=>document.addEventListener(event,handleFirstUserInteraction))
    }
    
}else {
        setShowModal(true)
    }

    },[])
    const toggle=()=>{
        const newState=!isPlaying
        setIsplaying(!isPlaying)
        newState?audioRef.current.play():audioRef.current.pause()
        localStorage.setItem('music',String(newState))
        localStorage.setItem('musicTime',new Date().toISOString())
        setShowModal(false)
    }
  return (
    <div
    className='fixed top-4 right-2.5 xs:right-4 z-50 group '
    
    >
{
    showModal&& <Modal onClose={()=>setShowModal(false)} toggle={toggle}/>
}
        <audio ref={audioRef} loop>
            <source  src='/audio/Attention.mp3'/>
            your browser does not support the audio element.
        </audio>
        <motion.button
        onClick={toggle}
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{delay:1}}
    className='w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg'  aria-label={'home'} >
     {isPlaying?<Volume2 className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>:<VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>}
            
        </motion.button>
    </div>
  )
}
