import ObjectsList from "./ObjectsList"
import Timer from "./timer"
import Image1 from "./Image1"
function GamePage({level,currentSession,onQuit}) {
  if (!currentSession) {
    return <div className="loading">Initializing...</div>;
  }
 
  return (
    <main className="game-page">
        <Timer start={currentSession.startTime} />
        {/* <ObjectsList images={level.targets} /> */}
        <Image1 level={level} currentSession={currentSession} />
    </main>
  )
}

export default GamePage