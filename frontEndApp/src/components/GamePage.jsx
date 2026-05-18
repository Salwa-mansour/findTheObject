import ObjectsList from "./ObjectsList"
import Timer from "./timer"
import Image1 from "./Image1"
import axios from "axios";
function GamePage({level,currentSession,setCurrentSession,onQuit}) {
  if (!currentSession) {
    return <div className="loading">Initializing...</div>;
  }

    if(currentSession.playerName && currentSession.finalTimeSeconds){
      try {
      const leaderboard = axios.get('http://localhost:3000/leaderboard')
        .then(response => {
          console.log('Leaderboard data:', response.data);
          // You can set this data to state if you want to display it in the UI
        })
       
     } catch (error) {
      console.error('Error fetching leaderboard:', error);
     }
     

      return (
        <div className="game-page">
          <h2>Congratulations {currentSession.playerName}!</h2>
          <p>You found all targets in {formatTime(currentSession.finalTimeSeconds)}!</p>
          <button onClick={onQuit}>Play Again</button>
        </div>
      );
    }else{
     return (
  
    <main className="game-page">
        <Timer sesstion={currentSession} />
        {/* <ObjectsList images={level.targets} /> */}
        <Image1 level={level}
        currentSession={currentSession}
        setCurrentSession={setCurrentSession} />
    </main>
         )
    }
 

}

export default GamePage