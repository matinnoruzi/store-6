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
import { AiFillHeart } from "../../public/react-icons/ai"
import { AiFillPhone } from "../../public/react-icons/ai"
import Cookies from 'js-cookie'
import ThemeToggle from './ThemToggle'
import useMediaQuery from './usemediaquery'

function Navbar() {
    const islaptop = useMediaQuery('(min-width : 1000px)')
    const [khosh, setKhosh] = useState(false)


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
        {
            "title": "علاقه مندی ها  ",
            "href": "/favorites",
            "icon": <AiFillHeart />

        },
        {
            "title": "تماس با ما  ",
            "href": "/contact",
            "icon": <AiFillPhone />

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

    ]
    return (
        <nav>
            <div className='bg-[#ccf3ea]  '>
                <div className='shadow-md'>
                    <div className='h-[10vh]  p-10 flex justify-between mobile-mini:flex-col   mobile-smini:flex-col'>
                        {/* //////////////////////////////////    nvabarrrrrrrr    //////////////////////////// */}
                        <div className=' w-[80%] laptop:w-1/2 tablet-xl:w-1/2 tablet:w-3/4 mobile-mini:w-full mobile-smini:w-full'>
                            {navLinks.map((item, index) => (
                                <Link key={item.href} className={`mobile-mini:p-2 mobile-mini:text-[15px]  mobile-big:text-[12px] mr-2 bg-emerald-300 p-3 rounded-3xl matindarknav hover:bg-emerald-400 hover:text-white transition shadow-md ${item.href == pathname ? "bg-emerald-500 text-white font-bold" : ""}  ${index === 1 ? 'mobile-smini:hidden' : ""} mobile-smini:p-2 mobile-smini:text-[13px] `} href={item.href}> {item.title}</Link>

                            ))}

                            <div>
                                <p className='bg-red-300 w-6 h-6 rounded-full text-center shadow'>{totalAllQty}</p>

                            </div>

                            <div className='mt-5'>
                                {Cookies.get("token") ? (<button onClick={() => { Cookies.remove("token"), redirect("/") }} className={`cursor-pointer mobile-smini:p-2 mobile-smini:text-[10px] 
                             bg-[#d13f3f77] rounded-2xl p-2 mt-4  `}>Log Out</button>) : (<div>
                                    <Link className='bg-[#fc868677] mobile-smini:p-2 mobile-smini:text-[10px]  rounded-2xl p-4 mt-4' href={"./login"} >Login</Link>
                                </div>)}
                            </div>

                        </div>

                        {/* ///////////////menubar btn  and dark mode///////////// */}

                        <div className='mobile-smini:w-full w-[20%] flex justify-end items-start laptop:w-1/2 tablet-xl:w-1/2 tablet:w-1/4 mobile-mini:w-full  '>
                            <div className='mr-6  '>

                                <ThemeToggle />
                            </div>
                            <button onClick={() => setFirst(!first)}><AiOutlineBars className=' mobile-smini:p-2 mobile-smini:text-[35px] mobile-mini:p-2 mobile-mini:text-[40px]  mobile-big:text-[35px] cursor-pointer text-emerald-600 bg-emerald-200 text-[50px] rounded-full  shadow-md p-2' /></button>

                        </div>

                    </div>
                    <div className='relative'>
                        <div className='h-[70vh] flex justify-center items-center mt-28 mobile-mini:w-full'>
                            <div className='w-[35%] h-[70vh] '>
                                <ImageSwiper />
                            </div>
                        </div>

                        {islaptop && (<div>

                            <div className='absolute left-2 top-20 '>
                                <img className='w-80 opacity-50' src='/mobiles/mobile-nav2.png' alt="" />
                            </div>

                            <div className='absolute right-0 top-20 drop-shadow-2xl'>
                                <img className='w-52 opacity-50' src='/mobiles/mobile-nav1.png' alt="" />
                            </div>

                        </div>)}

                    </div>

                </div>
                {/* ///////////////////////////menu BAr /////////////////////*/}
                <div >
                    {first && (
                        <div className='z-50 rounded-xl h-full w-[300px] bg-emerald-100 fixed right-0 bottom-0 shadow-2xl menu-bar'>
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