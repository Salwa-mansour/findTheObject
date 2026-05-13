import { useState } from 'react';
import TargetSquier from './TargetSquier';
import ObjectsDropdown from './ObjectsDropdown';


function Image1({level}) {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [dropDownPosition, setDropDownPosition] = useState({ x: 0, y: 0 });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  function mouseMoveHandler(e) {
 const rect = e.currentTarget.getBoundingClientRect();
  

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xPercent = ((mouseX / rect.width) * 100).toFixed(2);
  const yPercent = ((mouseY / rect.height) * 100).toFixed(2);
  setCoords({ x: xPercent, y: yPercent });
  }
  function clickHandler(e) {
  
    if (!showDropdown) {
    setShowDropdown(true);
    }
    setDropDownPosition({ x: coords.x, y: coords.y });
  }
  return (
    <>
    <span>-----{coords.x} , {coords.y}</span>
   
    <section className="img-container"
      onMouseMove={mouseMoveHandler}
      onClick={clickHandler}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
        <img src={level.imagePath} alt="find items" />
       
        <TargetSquier  position ={coords} show ={showCursor}/>
       
        <ObjectsDropdown
        images={level.targets}
         position={dropDownPosition} 
        show={showDropdown}
         setShow={setShowDropdown} />
    </section>
     </>
  )
}

export default Image1 