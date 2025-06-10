"use client"
import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'


export interface IProduct {
    id: string,
    name: string,
    description: string,
    image: string

}

function ImageSwiper() {
    const [twice, setTwice] = useState<IProduct[]>([])

    useEffect(() => {

        axios("http://localhost:3005/products").then((res) => {
            setTwice(res.data)
        })

    }, [])

    return (
        <Swiper className='flex ' modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1.3}

        >
            {twice.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link href={`${item.id}`}> 
                        <div className='relative h-96 z-10 flex flex-col justify-center items-center bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-lg w-full matindarki'>
                            <img alt='not loading' src={item.image} className='mobile-big:p-6 w-[200px] h-auto mx-auto mt-2 [filter:drop-shadow(0_3px_5px_rgba(0,0,0,0.5))] hover:scale-105 transition '  />
                            <h2 className='font-semibold drop-shadow p-9'>{item.description}</h2>
                        </div>
                    </Link>

                </SwiperSlide>
            ))}
            {/* text-center mt-2 bg-emerald-100 rounded-2xl w-60 ml-46 p-2 shadow-md */}

        </Swiper>

    )
}

export default ImageSwiper