import { HomeButton } from '@/components'
import React from 'react'

const SubPageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16 relative">
   <HomeButton/>
        {children}
        
         </main>
  )
}

export default SubPageLayout