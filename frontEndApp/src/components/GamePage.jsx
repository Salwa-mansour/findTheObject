import ObjectsList from "./ObjectsList"
import Timer from "./timer"
import Image1 from "./Image1"
function GamePage({level,onQuit}) {
  return (
    <main className="game-page">
        <Timer />
        <ObjectsList images={level.targets} />
        <Image1 level={level} />
    </main>
  )
}

export default GamePage