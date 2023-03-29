import React, { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../../App'
import { FaStepForward, FaStepBackward } from 'react-icons/fa'
//FaRegPauseCircle
import './Dashboard.css'
const Dashboard = () => {
  const { index, setIndex, list, isPlay, setIsPlay } = useContext(AppContext)
  const refAudio = useRef()
  useEffect(() => {
    refAudio.current.addEventListener('play', () => {
      setIsPlay(!isPlay)
    })
  })
  useEffect(() => {
    refAudio.current.addEventListener('pause', () => {
      setIsPlay(!isPlay)
    })
  })
  return (
    <div className='dashboard'>
      <div className='play'>
        <button
          onClick={() => {
            setIndex(
              index > 0 ? index - 1 : (index) => (index = list.length - 1)
            )
            setIsPlay(false)
          }}
        >
          <FaStepBackward />
        </button>

        <audio
          ref={refAudio}
          className='audio'
          src={list[index].path}
          controls
          controlsList=''
        />

        <button
          onClick={() => {
            setIndex(
              index >= list.length - 1 ? (index) => (index = 0) : index + 1
            )
            setIsPlay(false)
          }}
        >
          <FaStepForward />
        </button>
      </div>
    </div>
  )
}

export default Dashboard
