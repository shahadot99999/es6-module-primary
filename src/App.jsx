import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches]= useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data =>setWatches(data))
  }, [])

  // const watches = [
  //   {id:1, name: 'Apple watch', price: 200},
  //   {id:2, name: 'Samsu watch', price: 200},
  //   {id:1, name: 'MI watch', price: 200},
  // ]



  return (
    <>
      <h1>Vite + React</h1>
     {
      watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
     }
    </>
  )
}

export default App
