import Link from 'next/link'
import React from 'react'
import Plus from './plus'
import { IProduct } from './types'
import Like from './like'


function Products({ id, name, description, image, price, category, priceTakhfif }: IProduct) {

    return (
        <div key={id} className="flex justify-center items-center relative z-30 mt-32  ">

            <Link href={`${id}`}>  <img alt='not loading' src={image} className="w-52 flex  [filter:drop-shadow(0_3px_5px_rgba(0,0,0,0.5))] hover:scale-105 transition" /> </Link>

            <div className="flex flex-col justify-center items-center rounded-2xl absolute top-48 bg-emerald-100 w-64 z-[-1]  [filter:drop-shadow(0_3px_5px_rgba(0,0,0,0.2))] hover:scale-105 transition matindark">
                <Link href={`${id}`}>
                    <div className="font-bold pt-20 flex justify-center items-center ">
                        {name}
                    </div>
                    <div className="border-t border-slate-200 w-full p-2 text-center">
                        <div className="font-bold ">{priceTakhfif ? (<div className='flex flex-col'> <span>{priceTakhfif}</span> <span className='text-sm text-gray-700 line-through'>{price}</span></div>) : <span>{price}</span>} </div>
                    </div>
                    <div className="border-t border-slate-200 w-full p-2">
                        {description}
                    </div>
                </Link>
                <div className="mb-3">
                    <Plus id={id} />
                </div>
                <div>
                    <Like id={id} />
                </div>
            </div>
        </div>
    )

}

export default Products