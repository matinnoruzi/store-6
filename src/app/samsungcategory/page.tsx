import Products from '@/components/Products'
import { IProduct } from '@/components/types'
import React from 'react'

async function page() {


  const hoy = await fetch("http://localhost:3005/products?category=samsung")
  const data = await hoy.json() as IProduct[]

  return (
    <div className='mb-96'>
      <h3 className='flex justify-center items-center font-bold bg-emerald-100 rtl py-1'>محصولات SAMSUNG</h3>
      <div className="flex flex-wrap gap-28 mt-10 justify-center items-center min-h-96">
        {data.map((item) => (
          <Products key={item.id} {...item} />

        ))}
      </div>
    </div>
  )
}

export default page