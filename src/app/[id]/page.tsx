import Comments from '@/components/Comments'
import Container from '@/components/Container'
import Plus from '@/components/plus'
import { IProduct } from '@/components/types'
import React, { useContext, useEffect, useState } from 'react'

interface IParams {
    params: Promise<{ id: string }>
    searchParams: Promise<{}>
}

async function Product(props: IParams) {
    const { id } = await props.params

    const dataa = await fetch(`http://localhost:3005/products/${id}`)
    const data = await dataa.json() as IProduct
 
    return (
        <div className='min-h-96'>
            <Container>
                <div className='flex flex-row-reverse mt-10 gap-7'>

                    <img src={data.image} alt="" className='w-60  [filter:drop-shadow(0_4px_5px_rgba(0,0,0,0.5))] ' />

                    <div className='flex flex-col gap-8 bg-emerald-200 rounded p-4'>
                        <div>
                           <h4 className='font-bold'>{data.name}</h4> 
                        </div>
                        <div>
                            {data.description}
                        </div>
                        <div>
                           <span className='rtl'>  {data.priceTakhfif ?( <div>{data.priceTakhfif} مبلغ با تخفیف</div> )   :  (<div>  قیمت : {data.price} </div>)} </span> 
                        </div>
                        <div className='flex justify-end items-end  h-28'>
                            <Plus id={id} />
                        </div>
                    </div>

                </div>
                <div>
                    <Comments id={id} />
                </div>
            </Container>
        </div>
    )
}
export default Product