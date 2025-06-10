"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import cookie from 'js-cookie'
import { redirect } from 'next/navigation'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

interface IForm {
    username : string ,
    password : string ,
    confirmPassword: string ,
    age : number 
}

function Login() {

    const schema = yup.object().shape({

        username: yup.string().required("username اجباریست"),
        age: yup.number().transform(value => (isNaN(value) ? undefined : value)).nullable().required("سن شما برای ما بسیار مهم است").positive().min(18, "سن باید بالای 18 سال باشد").max(35, "سن شما خیلی زیاد است "),
        password: yup.string().min(5, "باید بالای 5 حرف باشد").max(15, "باید کمتر از 15 حرف باشد").required("رمز را فراموش کردید").matches(/[a-z]+/, " حرف کوچک باید داشته باشد").matches(/[A-Z]+/, "حرف بزرگ باید داشته باشد").matches(/\d+/, "باید عدد داشته باشه"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "رمز شما باهم یکی نیست").required("باید رمزی که وارد کردی رو اینجا دوباره وارد کنی")

    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleLogin = (data : IForm) => {
        axios({
            url: "http://localhost:3005/login",
            method: "POST",
            data: {
                username : data.username,
                password : data.password ,
                age : data.age
            }
        }).then((res) => {
            const data = res.data
           
            const response = {
                token: "sncjnsh842jfkmwo3f2fkcdslfme",
                expire: 7
            }
            cookie.set("token", response.token, { expires: response.expire })
            redirect("/sabad")
        })
    }

    return (
        <div className='flex justify-center items-center mt-10 matindarkfooter'>


            <div className='flex flex-col   bg-gradient-to-br from-emerald-200 to-emerald-100 w-[400px] h-[500px] p-10 rounded shadow-xl '>
                <div className='font-bold h-full flex justify-center items-center'>
                    <h3 className='text-3xl '>ورود کاربری</h3>
                </div>
                <div >
                    <form className='flex flex-col justify-end h-full ' onSubmit={handleSubmit(handleLogin)}>
                        <input className='mb-3 rounded p-3' type="text" placeholder='username' {...register("username")} />
                        {errors.username && (<p>{errors.username?.message}</p>)} 
                        <input className=' mb-3 rounded p-3' type="password" placeholder='password' {...register("password")} />
                        {errors.password && (<p>{errors.password?.message}</p>)}
                        <input className=' mb-3 rounded p-3' type="password" placeholder='confirm password' {...register("confirmPassword")} />
                        {errors.confirmPassword && (<p>{errors.confirmPassword?.message}</p>)}
                        <input className='rounded p-3' type="number" placeholder='چند سالته' {...register("age")} />
                        {errors.age && (<p>{errors.age?.message}</p>)}
                        <div className='flex justify-center items-center'>
                            <button type='submit' className='cursor-pointer hover:scale-105 transition font-semibold bg-emerald-400 w-[120px] h-[40px] rounded mt-5' >ورود  </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Login

