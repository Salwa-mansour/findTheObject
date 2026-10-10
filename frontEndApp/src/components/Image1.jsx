import { useState } from 'react';
import TargetSquier from './TargetSquier';
import ObjectsDropdown from './ObjectsDropdown';
import ObjectsList from './ObjectsList';

function Image1({ level, currentSession, setCurrentSession }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [foundTargets, setFoundTargets] = useState([]);

  // Helper to extract clean coordinates supporting both mouse and mobile touch
  const calculatePercentages = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector('img');
    const rect = img.getBoundingClientRect(); // Always measure the actual image bounds!

    // Fallback for mobile touches vs desktop mouse clicks
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    // Guard against out-of-bound calculations
    const xPercent = Math.max(0, Math.min(100, (mouseX / rect.width) * 100)).toFixed(2);
    const yPercent = Math.max(0, Math.min(100, (mouseY / rect.height) * 100)).toFixed(2);

    return { x: xPercent, y: yPercent };
  };

  function mouseMoveHandler(e) {
    const { x, y } = calculatePercentages(e);
    setCoords({ x, y });
  }

  function clickHandler(e) {
       if (e) {
            e.stopPropagation();
        }
    // If the user clicked directly inside the dropdown menu, do nothing here!
    if (e.target.closest('.object-dropdown')) {
      return;
    }
    const { x, y } = calculatePercentages(e);
    setCoords({ x, y });
    setDropDownPosition({ x, y });
    setShowDropdown(true);
  }
function spacerClick(e){
  console.log('spacer clicked')
   if (e.target.closest('.img-container')) {
      return;
    }
    setShowDropdown(false)
    setDropDownPosition({ x: 0, y: 0 })
}
  return (
    <>
      {/* <span>-----{coords.x} , {coords.y}</span> */}
    
      <ObjectsList images={level.targets} foundTargets={foundTargets} />
     <div className='image-spacer' onClick={spacerClick} onTouchStart={spacerClick}>
        <section 
          className="img-container"
          onMouseMove={mouseMoveHandler}
          onClick={clickHandler}
          onTouchStart={clickHandler} // Added explicit mobile touch support
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          
        >
          <img src={level.imagePath} alt="find items" style={{ width: '100%', display: 'block' }} />
        
          <TargetSquier position={coords} show={showCursor} />
        
          <ObjectsDropdown
            images={level.targets}
            position={dropDownPosition} 
            show={showDropdown}
            setShow={setShowDropdown}
            foundTargets={foundTargets}
            setFoundTargets={setFoundTargets}
            currentSession={currentSession}
            setCurrentSession={setCurrentSession} 
          />
        </section>
      </div>
    </>
  );
}

export default Image1;