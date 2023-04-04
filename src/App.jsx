import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bigdrop from './components/Bigdrop'
import Cuker from './components/Cuker'
import Hrefs from './components/Hrefs'
import Tommy from './components/Tommy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Hrefs />
      <Routes>
        <Route path='/tommy' element={<Tommy/>} />
        <Route path='/bigdrop' element={<Bigdrop/>} />
        <Route path='/cuker' element={<Cuker/>} />
      </Routes>   
    </div>
  )
}

export default App
