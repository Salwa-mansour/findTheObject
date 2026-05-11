import StartGameCard from './StartGameCard'; // Fixed typo in 'components'
import image1 from '../assets/imageGroup1/findTheObject1_1.jpg'; // Added file extension
import { Link } from 'react-router-dom'; // Ensure you have routing logic if using linkTo
import GamePage from './GamePage';

function Home({ setCurrentLevel,levels }) {
  return (
    <div className="level-select">
      {levels.map(level => (
        <div key={level.id} className="level-card">
          <img src={level.mainImage} alt="" width={400} />
          <h3>{level.title}</h3>
          <p>Difficulty: {level.difficulty}</p>
          <button onClick={() => setCurrentLevel(level)}>Start Level</button>
        </div>
      ))}
    </div>
  );
}

export default Home;