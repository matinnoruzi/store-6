"use client"
import React, { useContext, useEffect, useState } from 'react'
import {  IProduct, NewIProduct } from './types'
import { contextValue } from './context'
import axios from 'axios'

function Price() {
    const {sabad} = useContext(contextValue)

const [data, setData] = useState<IProduct[]>([])

    useEffect(() => {
      
    axios("http://localhost:3005/products").then((res)=>{
        const data = res.data
        setData(data)
    })
      
    }, [])
    

    const totalPrice = sabad.reduce((total , item)=>{
       const prices = data.find((oitem)=> oitem.id == item.id)
       const newPrice = prices?.priceTakhfif || prices?.price
      return total + (newPrice || 0) * item.qty
    },0)

  return (
    <div className='mt-10 bg-red-200 rounded p-4'>
      <span className='rtl '> مبلغ قابل پرداخت : {totalPrice.toLocaleString("fa-IR") } </span> 
        
    </div>
  )
}

export default Price