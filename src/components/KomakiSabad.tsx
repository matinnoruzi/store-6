"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IProduct } from './types'
import Container from './Container'
import Plus from './plus'

export interface ITY {
    id: string,
    qty: number

}

function KomakiSabad({ id }: ITY) {
    const [bool, setBool] = useState({} as IProduct)

    useEffect(() => {

        axios(`http://localhost:3005/products/${id}`).then(res => {
            const { data } = res
            setBool(data)
        })


    }, [])
    return (
        <Container>
            <div className='rtl mt-2 flex'>
                <img src={bool.image}  className='w-60  [filter:drop-shadow(0_4px_5px_rgba(0,0,0,0.5))]' />
                <div className='bg-emerald-100 rounded-2xl p-5 shadow-md'>
                    <h2>{bool.name}</h2>
                    <p className='mt-10'>{bool.description}</p>
                    <p className='mt-16'>{bool.priceTakhfif ?( <div>{bool.priceTakhfif} مبلغ با تخفیف</div> )   : bool.price }</p>
                    <div className='mt-10'>
                        <Plus id={id} />
                    </div>

                </div>


            </div>
        </Container>

    )
}

export default KomakiSabad