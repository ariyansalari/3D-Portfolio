import React from 'react'
import clsx from 'clsx'
const ItemLayout =({children,className})=>{
return (
    <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center',className)}>
    {children}
</div>
)
}
export const AboutDetails = () => {
  return (
    <section className='py-20 w-full '>
          <div className='grid grid-cols-12 gap-8 w-full'>
            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
            <h2 >
    Architect of Enchantment
</h2>
<p>fsdfsfsfsfsfsfsdfs</p>
            </ItemLayout>
            <ItemLayout className={'col-span-4 '}>
            <div >
    25+ clients
</div>
            </ItemLayout>

            <ItemLayout className={'col-span-4 '}>
            <div >
            4+ years of experience
</div>
            </ItemLayout>

          </div>
    </section>
  )
}
