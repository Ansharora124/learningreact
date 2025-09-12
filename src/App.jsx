import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    // update state so the UI reflects typing
    setInputValue(event.target.value)
    
  }

  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      {inputValue}
    </div>
  )
}

export default App
