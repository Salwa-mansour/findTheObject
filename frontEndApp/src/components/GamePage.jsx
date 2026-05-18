import { useState, useEffect } from "react";
import ObjectsList from "./ObjectsList";
import Timer from "./timer";
import Image1 from "./Image1";
import axios from "axios";
import { formatTime } from "../utils/formatTime";

function GamePage({ level, currentSession, setCurrentSession, onQuit }) {
  // 1. Properly manage the leaderboard as local React state
  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);

  // Check if the current user has successfully wrapped up their run
  const isGameOver = currentSession?.playerName && currentSession?.finalTimeSeconds;

  // 2. Fetch the data inside a clean side-effect hook triggered on game over
  useEffect(() => {
    if (isGameOver) {
      setLoadingLeaderboard(true);
      axios.get('http://localhost:3000/leaderboard')
        .then(response => {
          console.log('Leaderboard data:', response.data);
          setLeaderboard(response.data);
        })
        .catch(error => {
          console.error('Error fetching leaderboard:', error);
        })
        .finally(() => {
          setLoadingLeaderboard(false);
        });
    }
  }, [isGameOver]); // Only re-run if the game over evaluation changes

  // Early return safety screen
  if (!currentSession) {
    return <div className="loading">Initializing Session...</div>;
  }

  // --- RENDERING ROUTE A: GAME COMPLETION SCREEN & LEADERBOARD ---
  if (isGameOver) {
    // Standardize finalTimeSeconds math into pure seconds units
    const userSeconds = currentSession.finalTimeSeconds / 1000;

    return (
      <div className="game-over-container">
        <section className="victory-card">
          <h2>Congratulations, {currentSession.playerName}!</h2>
          <p>You successfully tracked down all targets in <strong>{formatTime(userSeconds)}</strong>.</p>
       
        </section>

        <section className="leaderboard-card">
          <h3>🏆 Global Leaderboard</h3>
          {loadingLeaderboard ? (
            <p className="subtext">Updating rankings...</p>
          ) : leaderboard.length === 0 ? (
            <p className="subtext">No entries recorded yet. Be the first!</p>
          ) : (
            <ol className="leaderboard-list">
              {leaderboard.map((entry, index) => {
                // Adjust entry fields to match whatever keys your backend model returns (e.g., name vs playerName)
                const name = entry.name || entry.playerName || "Anonymous";
                const entrySeconds = (entry.finalTimeSeconds || entry.finalTimeSeconds || 0) / 1000;

                return (
                  <li key={entry.id || index} className="leaderboard-item">
                    <span className="player-name">{name}</span>
                    <span className="player-time">{formatTime(entrySeconds)}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </div>
    );
  }

  // --- RENDERING ROUTE B: ACTIVE RUNNING GAME PLAY ---
  return (
    <main className="game-page">
      <Timer sesstion={currentSession} />
      {/* <ObjectsList images={level.targets} /> */}
      <Image1 
        level={level}
        currentSession={currentSession}
        setCurrentSession={setCurrentSession} 
      />
    </main>
  );
}

export default GamePage;