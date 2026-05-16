
import axios from "axios";

function ObjectsDropdown({images,position,show,setShow,foundTargets,setFoundTargets}) {
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
                    // Functional update safely prevents stale state race conditions
                    setFoundTargets(prev => [...prev, target]);
                }
            })
            .catch(error => {
                console.error('Error validating target:', error);
            });
        
        // Hide dropdown immediately to give snappy UI feedback
        setShow(false);
        console.log(`found targets: ${JSON.stringify(foundTargets, null, 2)}`);
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