import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-white-500 overflow-y-auto p-6">
    <AboutUs/>
    <h1 className='bg-red-500'>Hey I am here</h1>
    </div>
    </>
  )
}

export default App
