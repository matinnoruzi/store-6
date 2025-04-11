"use client"
import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { contextValue } from './context'
import { IProduct } from './types'

interface IDTYPE {
    id: string
}
function Plus({ id }: IDTYPE) {

    const { totlaQty, increaseQty, decreaseQty, filterItem } = useContext(contextValue)
    const [voy, setVoy] = useState(false)

    return (
        <div className='z-50'>
            <div>
                {totlaQty(id) === 0 ? (
                        <button onClick={() => increaseQty(id)} className='bg-emerald-300 rounded cursor-pointer p-2 font-bold transition-all text-emerald-800'>افزودن به سبد</button>
                    ) :(
                            <div>
                                <Button className='w-8' onClick={() => increaseQty(id)} variant='green'>+ </Button>
                                <span className='m-4'>{totlaQty(id)}</span>
                                <Button className='w-8' onClick={() => decreaseQty(id)} variant='red'>-</Button>
                                <Button className='w-8 ml-2' onClick={() => filterItem(id)} variant='yellow'>حذف</Button>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Plus