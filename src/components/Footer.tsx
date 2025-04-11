import React from 'react'
import Container from './Container'
import { AiFillInstagram } from "../../public/react-icons/ai"
import { AiOutlineWhatsApp } from "../../public/react-icons/ai"


function Footer() {
    return (
        <footer className='matindarkfooter' >
            <div className=' bg-gradient-to-r from-[#dafff7] to-[#8efce4] mt-10 h-56 p-4 border-t-8 border-emerald-200 rounded-4xl shadow-[0_-4px_14px_rgba(0,0,0,0.1)] '>
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
                            <p>تماس با ما</p>
                        </div>

                    </div>
                
            </div >
        </footer>


    )
}

export default Footer