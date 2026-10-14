import axios from "axios";

import { formatTime } from '../utils/formatTime.js';
import { getSoundMuted ,playHitSound,playWinSound} from '../utils/sound.js';



function ObjectsDropdown({ images, position, show, setShow, foundTargets, setFoundTargets, currentSession, setCurrentSession }) {
 const isMuted = getSoundMuted();
    const style = {
        display:show ? "flex": "none" ,
        opacity: show ? 1 : 0,

        pointerEvents: show ? 'auto' : 'none',

        top: `${position.y}%`,  

        left: `${position.x}%`,
    //  edge-detection transforms:
        // If x > 75%, shift left (-100%). If y > 75%, shift up (-100%). Otherwise, default layout.
        transform: `translate(${position.x > 75 ? '-100%' : '0px'}, ${position.y > 75 ? '-100%' : '1.5rem'})`,
        zIndex: 20,

    };



   function handleClick(targetId, e) {
    console.log({show})
      if(!show){
        console.log('hidden')
        return;
      }
        // Prevent click from bubbling up to the image container wrapper
        if (e ) {
            e.stopPropagation();
        }

        const data = { 
            possipleTargetId: targetId,
            xPoint: position.x,
            yPoint: position.y
        };
       
        axios.post(`${import.meta.env.VITE_API_URL}/checkHit`, data)
            .then(response => {
                const { hit, target } = response.data; 
     
                if (hit) {
                    if(!isMuted){
                        playHitSound();
                    }
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
        
        setShow(false); // Close dropdown safely after initiating request
    }


    // Switched to async/await syntax for cleaner nested API call handling

    async function handleWin(sessionId) {
         if(!isMuted){
          playWinSound()
        }
        try {

            // 1. Tell backend to stop the clock and record the end time

            const endResponse = await axios.post(`${import.meta.env.VITE_API_URL}/endGame`, { sessionId });

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

                const leaderboardResponse = await axios.post(`${import.meta.env.VITE_API_URL}/savePlayerName`, {

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
                        onClick={isFound ? null : (e) => handleClick(image.id, e)}
                        onTouchEnd={isFound ? null : (e) => {
                            e.preventDefault(); // Stops mobile ghost clicks/scrolling behavior
                            e.stopPropagation(); // Stops bubbling
                            handleClick(image.id, e);
                        }}
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