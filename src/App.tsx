import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import TaskList from './components/TaskList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <TaskList />
      <Footer/>
    </>
  )
}

export default App
