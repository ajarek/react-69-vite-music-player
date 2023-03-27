import list from './assets/Data/lista.json'

function App() {
  console.log(list);
  return <div className='App'>
    
    <img src={list[0].src} alt={list[0].artist} width='50%' />
  </div>
}

export default App
