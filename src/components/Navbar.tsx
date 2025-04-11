"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineBars } from "../../public/react-icons/ai"
import { AiFillCloseCircle } from "../../public/react-icons/ai"
import { contextValue } from './context'
import ImageSwiper from './ImageSwiper'
import { redirect, usePathname } from 'next/navigation'
import { AiFillAndroid } from "../../public/react-icons/ai"
import { AiFillApple } from "../../public/react-icons/ai"
import Cookies from 'js-cookie'
import ThemeToggle from './ThemToggle'

// import ThemeSwitch from './ThemeSwitch'


function Navbar() {

    const { totalAllQty } = useContext(contextValue)
    const pathname = usePathname()

    const [first, setFirst] = useState(false)
    const menuLinks = [
        {
            "title": "  محصولات اپل",
            "href": "/iphonecategory",
            "icon": <AiFillApple />
        },
        {
            "title": "محصولات سامسونگ ",
            "href": "/samsungcategory",
            "icon": <AiFillAndroid />

        },
    ]

    const navLinks = [
        {
            "title": "صفحه اصلی",
            "href": "/"
        },
        {
            "title": "تماس با ما",
            "href": "/contact"
        },
        {
            "title": "سبد خرید",
            "href": "/sabad"
        },
        {
            "title": "Login ",
            "href": "/login"
        },
    ]
    return (
        <nav>
            <div className='bg-[#f1fffc]  '>
                <div className='h-[70vh] shadow p-10 flex  '>
                    <div className='w-[30%]'>
                        {navLinks.map((item) => (
                            <Link key={item.href} className={`mr-2 bg-emerald-300 p-3 rounded-3xl matindarknav hover:bg-emerald-400 hover:text-white transition shadow-md ${item.href == pathname ? "bg-emerald-500 text-white font-bold" : ""}`} href={item.href}> {item.title}</Link>

                        ))}

                        <div>
                            <p className='bg-red-300 w-6 h-6 rounded-full text-center shadow'>{totalAllQty}</p>

                        </div>
                        <button onClick={() => { Cookies.remove("token"), redirect("/") }} className={`cursor-pointer   bg-[#d13f3f77] rounded-2xl p-2 mt-4 `}>Log Out</button>
                    </div>
                    <div className='w-[45%] '>
                        <ImageSwiper />
                    </div>
                    <div className='w-[25%] flex justify-end items-start'>
                        <div className='mr-6'>

                            <ThemeToggle />
                        </div>
                        <button onClick={() => setFirst(!first)}><AiOutlineBars className='cursor-pointer text-emerald-600 bg-emerald-200 text-[50px] rounded-full  shadow-md p-2 ' /></button>

                    </div>



                </div>
                <div className='dark:bg-amber-300'>
                    {first && (
                        <div className='z-60 rounded-xl h-full w-[300px] bg-emerald-100 fixed right-0 bottom-0 shadow-2xl menu-bar'>
                            <button onClick={() => setFirst(!first)}><AiFillCloseCircle className=' text-red-300 cursor-pointer  text-[50px] rounded-full absolute right-3   p-2' /></button>
                            <div className='p-5 mt-10 '>
                                <ul className='grid gap-5'>
                                    {menuLinks.map((item) => (
                                        <Link key={item.title} className={`bg-[#b3f8d6b2] rounded-md p-2 rtl flex justify-between `} href={item.href}>{item.title}  <span className='text-2xl text-emerald-800'>{item.icon}</span></Link>
                                    ))}

                                </ul>
                            </div>
                        </div>

                    )}
                </div>


            </div>
        </nav>
    )
}

export default Navbar