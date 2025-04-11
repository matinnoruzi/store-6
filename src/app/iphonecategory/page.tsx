import Products from '@/components/Products'
import { IProduct } from '@/components/types'
import React from 'react'

async function IphoneCategory() {

    const hoy = await fetch("http://localhost:3005/products?category=iphone")
    const data = await hoy.json() as IProduct[]
    return (
        <div>
            <h3 className='flex justify-center items-center font-bold bg-emerald-100 rtl py-1'>محصولات APPLE</h3>
            <div className='flex flex-wrap gap-28 mt-10 justify-center items-center '>
               
                    {data.map((item) => (
                        <Products key={item.id} {...item} />

                    ))}

            </div>
        </div>
    )
}

export default IphoneCategory