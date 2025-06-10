"use client"
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from './types'
import Products from './Products'
import Container from './Container'
import { contextValue } from './context'

function FavoritesId({ id }: { id: string }) {
    const [man, setMan ] = useState<IProduct[]>([])
    const {filterLike} = useContext(contextValue)
    useEffect(() => {

        axios(`http://localhost:3005/products/${id}`).then((res) => {

            const { data } = res
            setMan(Array.isArray(data) ? data : [data])
        })
        // haminjuri alaki object bood arraye krdm ba object ham flex mishod
    }, [])

    return (
        <Container>
        <div className='m-10 h-[100vh] relative'>

            {man.map((item) => (
                <div key={item.id}>
                    <Products {...item} />

                </div>
            ))}
            <div className='flex items-center justify-center'>
            <button className='absolute bottom-0 bg-emerald-400 w-auto h-3 p-5 rounded flex items-center justify-center ' onClick={()=> filterLike(id)}>حذف از علاقه مندی ها</button>

            </div>

         </div>

        
        </Container>
    )
}
export default FavoritesId