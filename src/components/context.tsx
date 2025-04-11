"use client"
import React, { createContext, useEffect, useState } from 'react'

interface IContext {
    children: React.ReactNode
}
interface ISabad {
    id: string,
    qty: number
}
interface IKol {
    sabad: ISabad[]
    increaseQty: (id: string) => void,
    decreaseQty: (id: string) => void,
    totlaQty: (id: string) => number,
    filterItem: (id: string) => void,
    totalAllQty: number
}

export const contextValue = createContext({} as IKol)

const ContextBase = ({ children }: IContext) => {

    const [sabad, setSabad] = useState<ISabad[]>([])



    const increaseQty = (id: string) => {

        setSabad((currentitems) => {
            const finding = currentitems.find((item) => item.id == id)
            if (finding == null) {
                return [...currentitems, { id: id, qty: 1 }]
            }
            else {
                return currentitems.map((items) => {
                    if (items.id == id) {
                        return { ...items, qty: items.qty + 1 }
                    }
                    else {
                        return items
                    }
                })
            }
        })

    }

    const decreaseQty = (id: string) => {
        setSabad((currentitems) => {
            const finding = currentitems.find((item) => item.id == id)
            if (finding?.qty == 1) {
                return currentitems.filter((item) => item.id != id)
            }
            else {
                return currentitems.map((item) => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    const totlaQty = (id: string) => {
        return sabad.find((item) => item.id == id)?.qty || 0


    }
    const totalAllQty = sabad.reduce((yek, item) => {
        return yek + item.qty
    }, 0)


    const filterItem = (id: string) => {
        setSabad((currentItems) => {
            return currentItems.filter((item) => item.id != id)
        })
    }

    useEffect(() => {

      const local =  localStorage.getItem("sabad")
      if(local){
       setSabad(JSON.parse(local))
      }

    }, [])

    useEffect(() => {

        localStorage.setItem("sabad" , JSON.stringify(sabad) )

    }, [sabad])

    



    return (
        <contextValue.Provider value={{ sabad, increaseQty, decreaseQty, totlaQty, filterItem, totalAllQty }} >


            {children}

        </contextValue.Provider>
    )





}
export default ContextBase



