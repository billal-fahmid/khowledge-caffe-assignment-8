import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <button class="btn btn-active btn-secondary">Button</button>
      <button class="btn btn-active btn-accent">Button</button>

    </div>
  )
}

export default App
