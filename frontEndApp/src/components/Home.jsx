import axios from 'axios';


function Home({ setCurrentLevel,levels,setCurrentSession }) {

  async function generateSesstion(currentLevel) {
   
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/startGame`, {
        levelId: currentLevel.id,
        // You can include additional data here if needed
      });
      const sessionData = response.data;
    
      setCurrentSession(sessionData); // Store session data in state
      // You can now use sessionData for further actions, such as navigating to the game page
    } catch (error) {
      console.error('Error creating session:', error);
    }
  }
  return (
    <div className="level-select">
      {levels.map(level => (
        <div key={level.id} className="level-card">
          <figure>
            <img src={level.imagePath} alt="" width={400} />
          </figure>
          
          <h3>{level.title}</h3>
          <p>Difficulty: {level.difficulty}</p>
          <button onClick={() =>{setCurrentLevel(level); generateSesstion(level)} }>Start Level</button>
        </div>
      ))}
    </div>
  );
}

export default Home;