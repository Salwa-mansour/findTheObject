import StartGameCard from './StartGameCard'; // Fixed typo in 'components'
import image1 from '../assets/imageGroup1/findTheObject1_1.jpg'; // Added file extension
import { Link } from 'react-router-dom'; // Ensure you have routing logic if using linkTo
import GamePage from './GamePage';

function Home() {
  return (
    <main className="home-page">    
        <StartGameCard imgSrc={image1} linkTo={`/game/${1}`} />
    </main>
  );
}

export default Home;