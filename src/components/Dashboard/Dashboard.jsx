import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import { FaPlayCircle,FaStepForward,FaStepBackward } from 'react-icons/fa'
//FaRegPauseCircle
import './Dashboard.css'
const Dashboard = () => {
  const { index,setIndex,list } = useContext(AppContext)
  return (
    <div className='dashboard'>
     <div className="range">
      <span>00:05</span>
     <input type="range"max={100} min={0} />
     <span>05:51</span>
     </div>
     <div className="play">
      <button onClick={()=>setIndex(index>0?index-1:index=>(index=list.length-1))}><FaStepBackward /></button>
      <button><FaPlayCircle/></button>  
      <button onClick={()=>setIndex(index>=list.length-1?index=>(index=0):index+1)}><FaStepForward/></button>
     </div>

    </div>
  )
}

export default Dashboard