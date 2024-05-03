'use client'
import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

export const RenderModel = ({className,children}:{className?:string,children:React.ReactNode}) => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Canvas className={clsx('w-screen h-screen relative -z-10',className)}>
        <Suspense fallback={null}>
{children}
        </Suspense>
        <Environment preset='sunset' />
    </Canvas>
  )
}
