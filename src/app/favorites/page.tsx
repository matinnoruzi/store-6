"use client"
import { contextValue } from '@/components/context'
import FavoritesId from '@/components/FavoritesId'
import React, { useContext, useEffect, useState } from 'react'

function Favorites() {
  const { like } = useContext(contextValue);


  return (

    <div className='m-6 flex flex-wrap  justify-center items-center'>
      {like.map((item) => (
        <div key={item.id} >
          <FavoritesId id={item.id} />

        </div>
      ))}


    </div>
  )
}

export default Favorites