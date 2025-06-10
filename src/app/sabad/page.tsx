"use client"
import Container from '@/components/Container'
import { contextValue } from '@/components/context'
import KomakiSabad from '@/components/KomakiSabad'
import Price from '@/components/Price'
import React, { useContext, useState } from 'react'

function Sabad() {
  const [yokh, setYokh] = useState(false)
  const { sabad } = useContext(contextValue)

  return (
    <Container>
      <div className='w-full'>
        <h3 className='flex justify-center items-start bg-cyan-100 py-1 font-bold'>لیست خرید شما</h3>
        {sabad.length > 0 ? (
          <div>

            {sabad.map((item) => (
              <KomakiSabad key={item.id} {...item} />
            ))}
          </div>)
          : (
            <div className='flex items-center justify-center mt-16'>
              <p className='font-semibold text-3xl'>چیزی در لیست خرید شما وجود ندارد</p>

            </div>
          )}
        <div className='rtl w-full'>
          <button onClick={() => setYokh(!yokh)} className='w-full'>
            <Price />
          </button>
        </div>
      
          <div className={`backdrop-blur-lg border-emerald-300 border-4 shadow-[0px_-1px_30px_rgba(0,0,0,0.2)] fixed bottom-0 h-60 w-full rounded-3xl   z-50 transition-all duration-300 ease-in-out ${yokh ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='p-6 rtl'>
              <button className='bg-red-300 rounded-full  px-2 text-2xl ' onClick={() => setYokh(false)}>X</button>
            </div>
            <div className='flex justify-center items-center rounded-lg'>
              <h3 className='bg-emerald-400 p-4 w-52 flex justify-center items-center rounded-lg font-extrabold'>انتقال به درگاه پرداخت</h3>
            </div>

          </div>
       


      </div>
    </Container>
  )
}

export default Sabad