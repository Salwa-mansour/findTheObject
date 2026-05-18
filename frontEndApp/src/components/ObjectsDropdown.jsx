import axios from "axios";
import { formatTime } from '../utils/formatTime.js';

function ObjectsDropdown({ images, position, show, setShow, foundTargets, setFoundTargets, currentSession, setCurrentSession }) {
    
    const style = {
        opacity: show ? 1 : 0.4,
        pointerEvents: show ? 'auto' : 'none',
        top: `${position.y}%`,  
        left: `${position.x}%`,
        transform: 'translate(0,1.5rem)', 
        zIndex: 20, 
    };

    function handleClick(targetId) {
        const data = { 
            possipleTargetId: targetId,
            xPoint: position.x,
            yPoint: position.y
        };

        axios.post('http://localhost:3000/checkHit', data)
            .then(response => {
                const { hit, target } = response.data; 
              
                if (hit) {
                    setFoundTargets(prev => {
                        const updatedTargets = [...prev, target];
                        
                        if (updatedTargets.length === images.length) {
                            setTimeout(() => {
                                handleWin(currentSession.id); 
                            }, 100);
                        }
                        
                        return updatedTargets;
                    });
                }
            })
            .catch(error => {
                console.error('Error validating target:', error);
            });
        
        setShow(false);
    }

    // Switched to async/await syntax for cleaner nested API call handling
    async function handleWin(sessionId) {
        try {
            // 1. Tell backend to stop the clock and record the end time
            const endResponse = await axios.post('http://localhost:3000/endGame', { sessionId });
            console.log('Win recorded:', endResponse.data);
            
            // Immediately update local state copy with raw end time finalTimeSeconds metadata
            setCurrentSession(endResponse.data);

            // FIX: Use 'finalTimeSeconds' (matching your Prisma backend layer) instead of finalTimeSeconds
            const msElapsed = endResponse.data.finalTimeSeconds || 0;
            const secondsElapsed = msElapsed / 1000;
            const scoreTimeString = formatTime(secondsElapsed);
              
            const playerName = prompt(
                `Congratulations! You found all targets in ${scoreTimeString}!\n\nPlease enter your name to join the leaderboard:`, 
                ""
            );

            // Only fire the save route if the user didn't hit cancel or submit an empty string
            if (playerName && playerName.trim() !== "") {
                console.log(`Saving leaderboard score for: ${playerName}`);
                
                // 2. Fire dependent call to save the user profile identifier string
                const leaderboardResponse = await axios.post('http://localhost:3000/savePlayerName', {
                    playerName: playerName.trim(),
                    sessionId: sessionId,
                });
                
                console.log('Leaderboard updated:', leaderboardResponse.data);
                setCurrentSession(leaderboardResponse.data); 
            }
        } catch (error) {
            console.error('Error handling endgame transaction sequence:', error);
        }
    }

    return (
        <ul className='object-dropdown' style={style}>
            {images.map(image => {
                const isFound = foundTargets.some(target => target.id === image.id);
                return (
                    <li key={image.id} 
                        onClick={isFound ? null : () => handleClick(image.id)}
                        style={{ 
                            pointerEvents: isFound ? 'none' : 'auto', 
                            cursor: isFound ? 'default' : 'pointer'
                        }}
                    >
                        <figure>
                            <img src={image.iconPath} alt={image.name} />
                            <figcaption>{image.name}</figcaption>
                            {isFound && <span className='check-span'>✔</span>}
                        </figure>
                    </li>
                );
            })}
        </ul>
    );
}

export default ObjectsDropdown;