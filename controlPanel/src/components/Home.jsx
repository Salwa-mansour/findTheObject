import axios from 'axios';
import { getImagePath } from '../config/constants.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Home() {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true); // Added a loading state

  useEffect(() => {
    const fetchAndProcessLevels = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/levels`);
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
  if (loading) return <div>Loading level...</div>;

  return (
    <>
    <Link to='/createlevel'>create level</Link>
    <div className="levels-container">
      {levels.map(level => (
        <div key={level.id} className="level-card">
          <img src={level.imagePath} alt="" width={400} />
          <h3>{level.title}</h3>
          <p>Difficulty: {level.difficulty}</p>
          <button >level details</button>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default Home;