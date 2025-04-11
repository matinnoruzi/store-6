"use client"
import Container from '@/components/Container'
import { contextValue } from '@/components/context'
import KomakiSabad from '@/components/KomakiSabad'
import Price from '@/components/Price'
import Search from '@/components/Price'
import React, { useContext } from 'react'


function Sabad() {

  const { sabad } = useContext(contextValue)



  return (
    <Container>
      <div>
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
        <div className='rtl'>
          <Price />
        </div>


      </div>
    </Container>
  )
}

export default Sabad