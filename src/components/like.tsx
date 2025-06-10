"use client"
import React, { useContext, useState } from 'react'
import { contextValue } from './context'
import { AiTwotoneHeart } from './../../public/react-icons/ai'

function Like({ id }: { id: string }) {

    const { likeIncrease, like, totalLike } = useContext(contextValue)
    const [disable, setDisable] = useState(false)

const handle = ()=>{
    likeIncrease(id)
    setDisable(true)

}
    return (
        <div className='flex flex-col justify-center items-center m-3'>
            <button className={`${disable && 'opacity-30'}`} onClick={handle} disabled={disable}>  <AiTwotoneHeart color={disable ? '#9ca3af' : '60a5fa'} /> </button>
            <div className='flex items-center justify-center'>
                {  totalLike(id) }
            </div>

        </div>
    )
}

export default Like