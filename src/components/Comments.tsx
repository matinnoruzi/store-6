"use client"
import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'

interface rt {
    id: string,
    text: string ,
    createdAt : string
}

function Comments({ id }: { id: string }) {

    const [comment, setComment] = useState("")
    const [data, setData] = useState<rt[]>([])
    const date = new Date().toLocaleDateString()

    //    const finding = data.map((item)=>{
    //         if(item.id == id ){
    //             return item.text
    //         }
    //     })

    const startComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:3005/comment",
            data: {
                id: id,
                text: comment,
                createdAt : new Date().toLocaleDateString("fa-IR")
            }
        })
    }

    axios("http://localhost:3005/comment").then((res) => {
        const data = res.data
        setData(data)
    })
    return (
        <div className='flex flex-row-reverse m-10 kollan:flex-col border rounded bg-slate-50  '>
            <div className=' p-24 mobile-big:p-12 mobile-mini:p-10 mobile-smini:p-8'>
                <form className=' flex flex-col w-full ' onSubmit={startComment}>
                    <label className='rtl font-extrabold '>نظرات خود را به اشتراک بگذارید</label>
                    <textarea onChange={(e) => setComment(e.target.value)} className='bg-slate-100 border rtl rounded p-1 ' placeholder='نظر من ...' name="" id="" rows={3}>
                    </textarea>
                    <button className='border bg-slate-300 rounded' type='submit' >ارسال نظر</button>
                </form>
            </div>
            {/* paiiiiiiniiiiiiiiiii moheeeeeem vaghti mikhya ye chizi az ye div nazane birun az min , max width use kon */}
            <div > 
                <div className='max-w-80'>
                           
                {
                    data.map((item) => (
                        <div>
                            {item.id == id ? (
                                <div className='m-10 border flex flex-col h-36'>
                                        <span className='border-b bg-slate-300 p-2'>{item.createdAt}</span>
                                        <div className='p-2'>{item.text}</div>
                                </div>

                            ) : "" }


                        </div>
                    )

                    )
                }
                  </div> 
            </div>

        </div>
    )
}

export default Comments