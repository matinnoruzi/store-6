'use client'

import React, { useState } from 'react'

function Contact() {
  const [info, setInfo] = useState("آدرس")

  const information = [
    {
      title: "آدرس",
      description: "نیاوران کوچه گل پلاک 33"
    },
    {
      title: "شماره تماس",
      description: "09121234567"
    },
    {
      title: "اطلاعات دیگر",
      description: "website with matin noruzi "
    },

  ]
  return (
    <div className='flex items-center justify-center m-5 rounded-md '>
      <div className='bg-emerald-200 w-[600px] h-[600px] rounded-md  matininfo shadow-lg'>
        <div className='bg-emerald-300 h-16 w-full rounded-md flex  matininfo'>
          {
            information.map((item) => (
              <div className='w-full p-4  border-r-2 flex justify-center items-center relative  '>
                {item.title === info ? ( <div className='absolute h-1 w-12 bottom-0 bg-white rounded-t'> </div> ) : ""}
                <button className='font-semibold text-xl' onClick={() => setInfo(item.title)} >{item.title}</button>
              </div>
            ))
          }
        </div>
        <div className=' h-[540px] w-full rounded-md flex justify-center items-center font-semibold  matininfo' >
          {
           information.map((item) => (
              <div>
                { info === item.title && item.description }
              </div>
            ))
          }

        </div>
      </div>
    </div>

  )
}

export default Contact