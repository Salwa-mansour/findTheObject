import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import GamePage from './components/GamePage'
import './css/App.css'

function App() {

  return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/game/:id' element={<GamePage />} />
  </Routes>
  )
}

export default App
