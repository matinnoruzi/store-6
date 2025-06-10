import Container from '@/components/Container'
import Products from '@/components/Products'
import { IProduct } from '@/components/types'
import React from 'react'

async function IphoneCategory() {

    const hoy = await fetch("http://localhost:3005/products?category=iphone")
    const data = await hoy.json() as IProduct[]
    return (
        <Container>
            <div className='mb-96'>
            <h3 className='flex justify-center items-center font-bold bg-emerald-100 rtl py-1'>محصولات APPLE</h3>

                <div className='flex flex-wrap gap-28 mt-10 justify-center items-center '>

                    {data.map((item) => (
                        <div key={item.id}>
                            <Products  {...item} />
                        </div>
                    ))}

                </div>

            </div>



        </Container>

    )
}

export default IphoneCategory