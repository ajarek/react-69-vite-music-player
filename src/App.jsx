import { useState, createContext } from 'react';
import list from './assets/Data/lista.json'
import Info from './components/Info/Info'
import Dashboard from './components/Dashboard/Dashboard'

export const AppContext = createContext()

function App() {
  
  const [index,setIndex]=useState(0)
  const [isPlay,setIsPlay]=useState(false)

  return <div className='App'>
    <AppContext.Provider value={{index,setIndex, list,isPlay,setIsPlay}}>
    <Info list={list} index={index}/>
    <Dashboard/>
    </AppContext.Provider>
  </div>
}

export default App
