
import {Link} from 'react-router-dom'

function StartGameCard({imgSrc, linkTo}) {
  return (
    <section className="start-game-card">
        <img src={imgSrc} alt="start game" />
        <Link to={linkTo}>Start Game</Link>
    </section>
  )
}

export default StartGameCard