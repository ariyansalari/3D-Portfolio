'use client'
import { useScreenSize } from '@/hooks'
import React from 'react'

export const ResponsiveComponent = ({children}:any) => {
    const size =useScreenSize()
  return (
    <>
    {children({size})}
    </>
  )
}
