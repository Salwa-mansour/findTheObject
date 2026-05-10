import ObjectsList from "./ObjectsList"
import Timer from "./timer"
import Image1 from "./Image1"
function GamePage() {
  return (
    <main className="game-page">
        <Timer />
        <ObjectsList />
        <Image1 />
    </main>
  )
}

export default GamePage