import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home'
import GamePage from './components/GamePage'
import './css/App.css'
import  levelsData  from './data/level';

function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [levels, setLevels] = useState(levelsData);
  return (

  <>
  
      {
        (!currentLevel) ? (
          <Home setCurrentLevel={setCurrentLevel} levels={levels} />
        ) : (
          <GamePage level={currentLevel} onQuit={() => setCurrentLevel(null)} />
        )
      }
    
  </>
)}

export default App
