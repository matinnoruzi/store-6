import React from 'react'
import { AiFillInstagram } from "../../public/react-icons/ai"
import { AiOutlineWhatsApp } from "../../public/react-icons/ai"
import Link from 'next/link'


function Footer() {
    return (
        <footer className='matindarkfooter' >
            <div className=' bg-gradient-to-r from-[#dafff7] to-[#8efce4] mt-10 h-56 p-4 border-t-8 border-emerald-200 rounded-3xl shadow-[0_-4px_14px_rgba(0,0,0,0.1)] '>
                <div className=' flex gap-4 mt-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='pt-7 flex flex-col gap-3 bg-[#16cc715e] p-4 rounded-2xl'>
                            <a href='' className='flex font-bold'>instagram <span className='text-2xl'><AiFillInstagram /> </span></a>
                            <a href='' className='flex font-bold'>whatsApp <span className='text-2xl'><AiOutlineWhatsApp /> </span></a>
                        </div>
                        <div className='bg-[#127e485e] p-4 rounded-2xl'>
                            <p>اطلاعات فوق سری</p>
                        </div>
                    </div>
                    <div className='bg-[#80fabd5e] text-center flex items-center p-4 rounded-2xl'>
                        <Link href={"./contact"}>تماس با ما</Link>
                    </div>
                    <div className='bg-[#3eb67a5e] text-center flex items-center p-4 rounded-2xl '>
                        <Link className='font-bold' href={"moarefi"} >معرفی ما</Link>
                    </div>
                    <div className='hidden kollan3:block'>
                        <div className=' flex  h-[2px] bg-green-500 justify-center items-center mt-16  rounded ml-40 none  '>
                            <div className='relative w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-emerald-400 rounded flex justify-center items-center '>
                                <p className='absolute top-10 font-bold'>زیبایی</p>
                            </div>
                            <div className=' relative w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-emerald-400 rounded flex justify-center items-center '>
                                <p className='absolute bottom-10 font-bold'>اعتماد</p>

                            </div>
                            <div className=' relative w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-emerald-400 rounded  flex justify-center items-center '>
                                <p className='absolute top-10 font-bold'>کیفیت</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </footer>


    )
}

export default Footer