
import axios from "axios";

function ObjectsDropdown({images,position,show,setShow,foundTargets,setFoundTargets,currentSession}) {
    // console.log(`show dropdown ${show}`);
    const style = {
        opacity: show ? 1 : 0.4,
        PointerEvent: show ? 'auto' : 'none',
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

        // Standard clean promise handling syntax
        axios.post('http://localhost:3000/checkHit', data)
            .then(response => {
                // Fixed spelling: match target across both lines
                const { hit, target } = response.data; 
                console.log(JSON.stringify(response.data));
               if (hit) {
                    // 1. Update the state for the UI
                    setFoundTargets(prev => {
                        const updatedTargets = [...prev, target];
                        
                        // 2. Check the game-over condition using the newly updated array length
                        if (updatedTargets.length === images.length) {
                            // Using a tiny timeout prevents the alert from blocking the final checkmark render
                            setTimeout(() => {
                                
                                handleWin(currentSession.id); // Record the win in the backend
                                alert('Congratulations! You found all targets!');
                            }, 100);
                        }
                        
                        return updatedTargets;
                    });
                }
            })
            .catch(error => {
                console.error('Error validating target:', error);
            });
        
        // Hide dropdown immediately to give snappy UI feedback
        setShow(false);
      
    }

function handleWin(sessionId) {
    axios.post('http://localhost:3000/endGame', { sessionId })
        .then(response => {
            console.log('Win recorded:', response.data);
            console.log(currentSession);
        })
        .catch(error => {
            console.error('Error recording win:', error);
        });
}
  return (
 
        <ul className='object-dropdown' style={style} >
          
        {
            images.map(image => {
                const isFound = foundTargets.some(target => target.id === image.id);
              return(
                 <li key={image.id} onClick={isFound ? null : () => handleClick(image.id)}
                 style={ 
                       { pointerEvents: isFound ? 'none' : 'auto', 
                        cursor: isFound ? 'default' : 'pointer'}
                  }
                 >
                    <figure >
                        <img src={image.iconPath} alt={image.name} />
                        <figcaption>{image.name}</figcaption>
                      {isFound && <span className='check-span'>✔</span>}
                    </figure>
                </li>
                ) 
  })
        }
        </ul>
 
  )
}

export default ObjectsDropdown