import { HomeButton } from '@/components'
import React from 'react'

const SubPageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 lg:px-32 relative z-50 px-8 xs:px-16">
   <HomeButton/>
        {children}
        
         </main>
  )
}

export default SubPageLayout