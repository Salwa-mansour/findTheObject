import { useState, useEffect } from 'react';
import Home from './components/Home';
import GamePage from './components/GamePage';
import './css/App.css';
import axios from 'axios';
import { getImagePath } from './config/constants.js';

function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true); // Added a loading state

  useEffect(() => {
    const fetchAndProcessLevels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/levels');
        const data = response.data;

        // Transform the data AFTER it arrives
        const levelWithImagePaths = data.map(level => ({
          ...level,
          // Update the property name to match what you use in components
          imagePath: getImagePath(level.imageFileName), 
          targets: level.targets.map(target => ({
            ...target,
            iconPath: getImagePath(target.iconFileName)
          }))
        }));

        setLevels(levelWithImagePaths);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndProcessLevels();
  }, []);

  if (loading) return <div>Loading Game...</div>;

  return (
    <>
      {!currentLevel ? (
        <Home setCurrentLevel={setCurrentLevel} levels={levels} />
      ) : (
        <GamePage level={currentLevel} onQuit={() => setCurrentLevel(null)} />
      )}
    </>
  );
}

export default App;