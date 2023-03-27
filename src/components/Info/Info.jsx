import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import './Info.css'
const Info = () => {
  const { index, setIndex, list } = useContext(AppContext)

  return (
    <div className='info'>
      <div className='title'>
        <h1>{list[index].title}</h1>
      </div>
      <div className='artist'>
        <h2>{list[index].artist}</h2>
      </div>
      <div className='img'>
        <img
          src={list[index].src}
          alt={list[index].artist}
        />
      </div>
    </div>
  )
}

export default Info
